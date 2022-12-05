import "./Navigation.scss";
import useActions from "../../utils/Hooks/hookActions";
// import { FaUserAlt } from "react-icons/fa";
const Navigation = () => {
  const { userName } = useActions();
  return (
    <div className="w-full fixed z-1000 top-[0] left-[0] p-[0.5rem] bg-primary-bold">
      <div className="flex justify-between items-center">
        <div className="text-blue-800 text-[2rem]"> Hello {userName}!</div>
        <div className="flex-item">
          {/* <FaUserAlt /> */}
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
