import useActions from "../../utils/Hooks/hookActions";
import { logout } from "../../features/reducers/userSlice";
import { FaSignOutAlt } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { useSignoutQuery } from "../../features/api/userApiSlice";
import SidebarOption from "../SidebarOptions/SidebarOptions";
import LargeLoader from "../../utils/LargeLoader";
const Sidebar = () => {
  const { navigate, dispatch } = useActions();
  // const [signout, { isLoading }] = useSignoutQuery();

  const handleSignOut = async () => {
    // const res = await signout();
    dispatch(logout());
    sessionStorage.setItem("token", "");
  };

  return (
    <div className="h-screen bg-blue-700 text-white font-medium text-left">
      <nav className="flex flex-col items-start justify-start h-[90%] relative">
        <SidebarOption
          title={"Dashboard"}
          icon={<MdOutlineSpaceDashboard />}
          event={() => {
            navigate("/");
          }}
        />
        <SidebarOption
          title={"Fund Wallet"}
          icon={<HiOutlineReceiptRefund />}
          className="nav-item"
          event={() => {
            navigate("/fund");
          }}
        />
        <SidebarOption
          title={"Bill Payment"}
          icon={<BiTransferAlt />}
          className="nav-item"
          event={() => {
            navigate("/bills");
          }}
        />
        <SidebarOption
          title={"Transfer"}
          icon={<BiTransferAlt />}
          className="nav-item"
          event={() => {
            navigate("/transfer");
          }}
        />
        <SidebarOption
          title={"Airtime/Data"}
          icon={<BiTransferAlt />}
          className="nav-item"
          event={() => {
            navigate("/topup");
          }}
        />
        <SidebarOption
          title={"Self-Services"}
          icon={<BiTransferAlt />}
          className="nav-item"
          event={() => {
            navigate("/self-services");
          }}
        />
        <SidebarOption
          title={"Profile"}
          icon={<AiOutlineProfile />}
          className="nav-item"
          event={() => {
            navigate("/profile");
          }}
        />
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
