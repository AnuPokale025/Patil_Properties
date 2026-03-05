import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authcontext';

const LogOut = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Call logout from context (clears cookies via backend)
        await logout();
        alert("Logged out successfully ✅");
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // Always redirect to login
        navigate("/login");
      }
    };

    handleLogout();
  }, [logout, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p>Logging out...</p>
      </div>
    </div>
  );
};

export default LogOut;
