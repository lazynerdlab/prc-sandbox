import "./Navigation.scss";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
const Navigation = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="navigation">
      <div className="flex">
        <div className="flex-item"> Hello {user?.username}!</div>
        <div className="flex-item">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
