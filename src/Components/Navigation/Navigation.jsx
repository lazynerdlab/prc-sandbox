import useActions from "../../utils/Hooks/hookActions";
// import { FaUserAlt } from "react-icons/fa";
const Navigation = () => {
  const { userName } = useActions();
  return (
    <div className="w-full p-[1rem] bg-blue-700">
      <div className="flex justify-between items-center">
        <div className="text-white text-[2rem]"> LOGO</div>
        <div className="flex-item">
          {/* <FaUserAlt /> */}
          <img
            className="rounded-full h-[1rem] w-[1rem]"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
