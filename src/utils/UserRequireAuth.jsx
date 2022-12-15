import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActions from "./Hooks/hookActions";

const UserRequireAuth = () => {
  const { user } = useActions();
  const location = useLocation();

  return user.AccountNumber ? (
    <Outlet />
  ) : user.Firstname ? (
    <Navigate to={"verifybvn"} state={{ from: location }} replace />
  ) : (
    <Navigate to={"accountsetup"} state={{ from: location }} replace />
  );
};

export default UserRequireAuth;
