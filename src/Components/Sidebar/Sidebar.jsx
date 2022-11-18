import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user";
import { fetchBalance } from "../../features/balance";
import { FaSignOutAlt } from "react-icons/fa";
import SidebarOption from "../SidebarOptions/SidebarOptions";
const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  return (
    <div className="sidebar">
      <nav className="nav">
        <SidebarOption title={"Dashboard"} />
        <SidebarOption title={"Wallet"} className="nav-item" />
        <SidebarOption title={"Profile"} className="nav-item" />
        <SidebarOption
          title={"Sign Out"}
          icon={<FaSignOutAlt />}
          event={() => {
            dispatch(logout());
            dispatch(fetchBalance(""));
          }}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
