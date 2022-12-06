// import useActions from "../../utils/Hooks/hookActions";
// import { logout } from "../../features/reducers/userSlice";
// import { FaSignOutAlt } from "react-icons/fa";
// import { BiTransferAlt } from "react-icons/bi";
// import { HiOutlineReceiptRefund } from "react-icons/hi";
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { AiOutlineProfile } from "react-icons/ai";
// import SidebarOption from "../SidebarOptions/SidebarOptions";
import styled from 'styled-components'

const SideNavContainer = styled.nav`
  width: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: #1A1A1A;
  height: 100vh;
  position: fixed;
  z-index: -1;
  flex-direction: column;
`

const Sidebar = () => {
  // const { navigate, dispatch } = useActions();
  return (
    <SideNavContainer>

    </SideNavContainer>
  );
};

export default Sidebar;
