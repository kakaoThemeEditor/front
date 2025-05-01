import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  //return <>{isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />}</>;
  return <Outlet />;
};
