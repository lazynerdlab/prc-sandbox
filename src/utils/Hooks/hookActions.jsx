import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const useActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const userName = useSelector((state) => state.user.value?.username);
  const userEmail = useSelector((state) => state.user.value?.email);
  return { dispatch, navigate, user, userEmail, userName };
};

export default useActions;
