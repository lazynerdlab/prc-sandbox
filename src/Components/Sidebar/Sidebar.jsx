import useActions from "../../utils/Hooks/hookActions";
import { useLocation } from "react-router-dom";
import { logout } from "../../features/reducers/userSlice";
import { FaSignOutAlt } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { useSignoutMutation } from "../../features/api/userApiSlice";
import SidebarOption from "../SidebarOptions/SidebarOptions";
import LargeLoader from "../../utils/LargeLoader";
const Sidebar = () => {
  const { navigate, dispatch } = useActions();
  const { pathname } = useLocation();
  const [signout, { isLoading }] = useSignoutMutation();

  const handleSignOut = async () => {
    const res = await signout();
    dispatch(logout());
    sessionStorage.setItem("token", "");
  };

  const nav = [
    {
      name: "Dashboard",
      path: "/",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      name: "Fund Wallet",
      path: "/fund",
      icon: <HiOutlineReceiptRefund />,
    },
    {
      name: "Bill Payment",
      path: "/bill",
      icon: <BiTransferAlt />,
    },
    {
      name: "Transfer",
      path: "/transfer",
      icon: <BiTransferAlt />,
    },
    {
      name: "Airtime/Data",
      path: "/airtime",
      icon: <BiTransferAlt />,
    },
    {
      name: "Self-Services",
      path: "/self-services",
      icon: <AiOutlineProfile />,
    },
  ];

  return (
    <div className="h-screen bg-blue-700 text-white font-medium text-center">
      <div className="text-white text-[2rem] pt-[1rem] m-auto text-center">
        {" "}
        LOGO
      </div>
      <nav className="flex flex-col justify-start items-center h-[90%] relative">
        {nav.map((item) => (
          <SidebarOption
            title={item.name}
            icon={item.icon}
            event={() => {
              navigate(item.path);
            }}
          />
        ))}
        <div className="absolute bottom-[2%]">
          <SidebarOption
            title={"Sign Out"}
            icon={<FaSignOutAlt />}
            event={handleSignOut}
          />
          {/* {isLoading && <LargeLoader />} */}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
