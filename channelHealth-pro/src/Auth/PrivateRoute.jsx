import { Outlet, Navigate } from "react-router-dom";
import { getRole, getAuth } from "./AuthService";

const PrivateRoutes = ({ role }) => {
  return getRole() == role && getAuth() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
