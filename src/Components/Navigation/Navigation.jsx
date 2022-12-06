import "./Navigation.scss";
import styled from 'styled-components'
import useActions from "../../utils/Hooks/hookActions";
// import { FaUserAlt } from "react-icons/fa";


const Navcontainer = styled.nav`
  width: 100%;
  background: #001DB8;
  height: 55px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
` 


const Navigation = () => {
  // const { userName } = useActions();
  return (
    <Navcontainer></Navcontainer>
  );
};

export default Navigation;
