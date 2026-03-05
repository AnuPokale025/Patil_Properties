import axios from "axios";

const api = axios.create({
  baseURL: "https://api.patilassociates.in/api/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true, // Enable cookies
});

// 🚨 Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      console.error("API Error:", data?.message || data);

      if (status === 401) {
        window.location.href = "/login";
      }

      return Promise.reject(data);
    }

    if (error.request) {
      return Promise.reject({
        message: "Server not responding",
      });
    }

    return Promise.reject({
      message: error.message,
    });
  }
);

export default api;

