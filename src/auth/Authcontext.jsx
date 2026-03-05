import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Axios Global Setup
axios.defaults.baseURL = "https://api.patilassociates.in/api/"; // Spring Boot URL
axios.defaults.withCredentials = true; // VERY IMPORTANT for cookies

// Helper: Set token in cookie
const setTokenCookie = (token) => {
  if (token) {
    document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

// Helper: Get token from cookie
const getTokenCookie = () => {
  const name = "token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let cookie of cookieArray) {
    cookie = cookie.trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
};

// Helper: Clear token cookie
const clearTokenCookie = () => {
  document.cookie = "token=; path=/; max-age=0; SameSite=Lax";
  delete axios.defaults.headers.common["Authorization"];
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= LOGIN =================
  const login = async (email, password) => {
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      // Save token to cookie
      if (res.data?.token) {
        setTokenCookie(res.data.token);
      }

      setUser(res.data.user || res.data);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  // ================= LOGOUT =================
  const logout = async () => {
    try {
      await axios.post("/auth/logout"); // backend clears cookie
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      clearTokenCookie();
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  // ================= CHECK AUTH ON PAGE LOAD/REFRESH =================
  const checkAuth = async () => {
    try {
      // Check for token in cookie
      const token = getTokenCookie();
      
      if (token) {
        setTokenCookie(token);
        // If token exists in cookie, consider user as authenticated
        // The token will be validated when making actual API calls
        // If it's invalid, the 401 interceptor will handle it
        setUser({ authenticated: true }); // Set a basic user object
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      clearTokenCookie();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // ================= AXIOS INTERCEPTOR FOR 401 =================
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          clearTokenCookie();
          setUser(null);
        }
        return Promise.reject(error);
      }
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
