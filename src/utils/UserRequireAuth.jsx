import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActions from "./Hooks/hookActions";

const UserRequireAuth = () => {
  const { user } = useActions();
  const location = useLocation();

  return user.firstName ? (
    <Outlet />
  ) : (
    <Navigate to={"accountsetup"} state={{ from: location }} replace />
  );
};

export default UserRequireAuth;
