// components/GuestRoute.tsx

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import { RoleRoute } from "../config/centralApp";
import type { TRole } from "../../shared/types/commonTypes";

const GuestRoute = () => {
  const auth = useSelector((s: RootState) => s.auth);

  // if(auth.loading){
  //   return <>loading...</>
  // }

  const role = auth.user?.activeRole
  if (auth.isAuthenticated && role) {
    return <Navigate to={RoleRoute[role]} replace />;
  }

  return <Outlet />;
};

export default GuestRoute;