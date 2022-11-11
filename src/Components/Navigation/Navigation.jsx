import "./Navigation.scss";
import { useSelector } from "react-redux";
const Navigation = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="navigation">
    <div className="flex">
      <div className="flex-item"> Hello {user}!</div>
      <div className="flex-item"></div>
    </div>
    </div>
  );
};

export default Navigation;
