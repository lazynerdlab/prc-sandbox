import useActions from "../../utils/Hooks/hookActions";
import { MdVerified } from "react-icons/md";
const Navigation = () => {
  const { user } = useActions();
  return (
    <div className="w-full py-[0.5rem] px-[1rem] bg-white">
      <div className="flex items-center">
        {/* <FaUserAlt /> */}
        <img
          className="rounded-full h-[4rem] w-[4rem] mr-[0.5rem]"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="avatar"
        />
        <div>
          <h3 className="text-[1.2rem] text-blue-500 m-0 p-0">
            Welcome,{user?.username}
          </h3>
          <p className="m-0 p-0">
            <MdVerified className="text-green-500 inline-block" /> verified
            Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
