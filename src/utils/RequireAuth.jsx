import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const RequireAuth = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  const location = useLocation();

  return user.token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
