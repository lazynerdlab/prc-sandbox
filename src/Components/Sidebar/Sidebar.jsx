import "./Sidebar.scss";
import useActions from "../../utils/hookActions";
import { logout } from "../../features/user";
import { resetBalance } from "../../features/balance";
import { FaSignOutAlt } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import SidebarOption from "../SidebarOptions/SidebarOptions";
const Sidebar = () => {
  const { navigate, dispatch, state } = useActions();
  const user = state.user.value;
  return (
    <div className="fixed h-screen bg-primary-bold text-white font-medium text-left">
      <nav className="flex flex-col items-start justify-start h-[90%] relative">
        <SidebarOption
          title={"Dashboard"}
          icon={<MdOutlineSpaceDashboard />}
          event={() => {
            navigate("/dashboard");
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
          title={"Transfer"}
          icon={<BiTransferAlt />}
          className="nav-item"
          event={() => {
            navigate("/transfer");
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
            event={() => {
              dispatch(logout());
              dispatch(resetBalance());
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
