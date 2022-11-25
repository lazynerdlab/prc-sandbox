import "./Navigation.scss";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
const Navigation = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="w-full fixed top-[0] left-[0] p-[0.5rem] bg-primary-bold">
      <div className="flex justify-between items-center">
        <div className="text-blue-800 text-[2rem]">
          {" "}
          Hello {user?.username}!
        </div>
        <div className="flex-item">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
