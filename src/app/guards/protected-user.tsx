
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = useSelector((s: RootState) => s.auth);
  if (isAuth.loading) {
    return <>loading...</>
  }

  if (!isAuth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  // if (!allowedRoles.includes(auth?.user?.role)) {is
  //   return <Navigate to="/unauthorized" />
  // }

  return <Outlet />;
};

export default ProtectedRoute;