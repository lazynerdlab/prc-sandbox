import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActions from "./Hooks/hookActions";

const RequireAuth = () => {
  const { user } = useActions();
  const location = useLocation();

  return user?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
