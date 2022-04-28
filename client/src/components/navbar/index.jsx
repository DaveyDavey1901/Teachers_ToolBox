import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { NavLinks } from "./navLinks";
import { SignOut} from "./signOut";
import { ThemeSize } from "../../styles/Responsive";
import { MobileLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 2;
  align-items: center;
  background-color: var(--color-bluedark);
  border-bottom: 1px solid var(--color-white);
  justify-content: space-between;
  
`;

const NavbarLeft = styled.div`
  display: flex;
  margin-left: 4rem;
`;
const NavbarMiddle = styled.div`
  display: flex;
  height: 100%;

`;
const NavbarRight = styled.div`
  display: flex;
  margin-right:2rem;
  
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: ThemeSize.mobile});

  return (
    <NavbarContainer>
      <NavbarLeft></NavbarLeft>
      <NavbarMiddle>{!isMobile && <NavLinks />}</NavbarMiddle>
      <NavbarRight>
        {!isMobile && <SignOut/>}
        {isMobile && <MobileLinks />}
      </NavbarRight>
    </NavbarContainer>
  );
}
