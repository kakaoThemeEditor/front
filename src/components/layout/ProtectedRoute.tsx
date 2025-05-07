import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return <Outlet />;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />}</>;
};
