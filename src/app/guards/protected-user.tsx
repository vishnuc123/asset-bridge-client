
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import type { TRole } from "../../shared/types/commonTypes";

interface IProtectedRoute{
  allowedRole:TRole
}

const ProtectedRoute = ({allowedRole}:IProtectedRoute) => {
  const isAuth = useSelector((s: RootState) => s.auth);
  if (isAuth.loading) {
    return <>loading...</>
  }
  
  
  if (!isAuth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  // console.log("active-role",isAuth.user?.activeRole)
  if(allowedRole !== isAuth.user?.activeRole){
    return <Navigate to="/login" replace />
  }
  

  return <Outlet />;
};

export default ProtectedRoute;