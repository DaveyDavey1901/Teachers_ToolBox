import { useState } from "react";
import styled from "styled-components";
import { LogOut } from "./logOut";
import { MenuToggle } from "./menuToggle";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  z-index: 99;
  color: var(--color-white);
  
`;


const LinksUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: var(--color-bluedark-varient);
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 6.2rem;
  left: 0;
  `;

const LinkItem = styled.li`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 500;
  font-size: 2.4rem;
  display: flex;
  margin-bottom: 1rem;
  

  border-bottom: 2px solid transparent;
  transition: all 240ms ease-in-out;
  &:hover {
    border-bottom: 2px solid #00c9fc;

  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 2.8rem;
  &:hover {
    color: #ffdd19;
    
  }
`;

export function MobileLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksUl>
          <LinkItem>
            <StyledLink to="/ttdashboard">My Dashboard</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/subject">Subject Selection</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/store">School Store</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/contact">Contact Us</StyledLink>
          </LinkItem>

          <LogOut />
        </LinksUl>
      )}
    </NavLinksContainer>
  );
}
