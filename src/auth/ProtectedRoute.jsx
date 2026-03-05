import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { useAuth } from "../auth/Authcontext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // WAIT until auth check finishes
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;