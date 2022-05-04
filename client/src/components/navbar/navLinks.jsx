import styled from "styled-components";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const NavLinksContainer = styled.div`
  display: flex;
  flex: center;
  height: 100%;
  align-items: center;
  color: var(--color-white);
`;

const LinksWrapper = styled.ul`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkItem = styled.li`
  display: flex;
  height: 95%;
  padding: 0 1.1em;

  font-weight: 500;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-top: 2px solid transparent;
  transition: all 240ms ease-in-out;
  &:hover {
    border-top: 2px solid var(--color-caramel);
    transform: scale(0.95);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    color: var(--color-white);
  }
`;

export function NavLinks(props) {
  const { user } = useContext(AuthContext);
  return (
    <NavLinksContainer>
      <LinksWrapper>
        {" "}
        {user ? (
          <>
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
          </>
        ) : (
          <></>
        )}
      </LinksWrapper>
    </NavLinksContainer>
  );
}
