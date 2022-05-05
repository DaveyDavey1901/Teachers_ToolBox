import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { NavLinks } from "./navLinks";
import { LogOut } from "./logOut";
import { ThemeSize } from "../styles/Responsive";
import { MobileLinks } from "./mobileNavLinks";
import { Link } from "react-router-dom";


const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 7rem;
  align-items: center;
  background-color: var(--color-bluedark);
  border-bottom: 2px solid var(--color-caramel);
  justify-content: space-between;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 999;
`;

const NavbarLeft = styled.div`
  display: flex;
  margin-left: 4rem;
  font-size: 2.2rem;
  font-weight: 700;
  padding: 1rem;
`;
const NavbarMiddle = styled.div`
  display: flex;
  height: 100%;
  
`;
const NavbarRight = styled.div`
  display: flex;
  margin-right: 2rem;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: ThemeSize.mobile });

  return (
    <NavbarContainer>
      <NavbarLeft>
        <Link to="/">Teachers ToolBox</Link>
      </NavbarLeft>
      <NavbarMiddle>{!isMobile && <NavLinks />}</NavbarMiddle>
      <NavbarRight>
        {!isMobile && <LogOut />}
        {isMobile && <MobileLinks />}
      </NavbarRight>
    </NavbarContainer>
  );
}
