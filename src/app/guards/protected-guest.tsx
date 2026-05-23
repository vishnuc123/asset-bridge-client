// components/GuestRoute.tsx

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const authenticated = useSelector((s: RootState) => s.auth.isAuthenticated);

  if (authenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;