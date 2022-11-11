import "./Sidebar.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <nav className="nav">
        <div className="nav-item">Dashboard</div>
        <div className="nav-item">Wallet</div>
        <div className="nav-item">Profile</div>
        <div
          onClick={() => {
            dispatch(logout);
          }}
          className="nav-item"
        >
          Sign out
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
