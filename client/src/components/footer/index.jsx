import styled from "styled-components";
import { Address } from "./Address";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  background-color: var(--color-bluedark);
  border-top: 2px solid var(--color-caramel);
  left:0;
  bottom: 0;
  right: 0;
  margin: 6rem auto 0 auto;
  z-index: 999;
`;
const FooterLeft = styled.div`
  display: flex;
  margin-right: 4rem;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
   display:none;
  }
`;
const FooterMiddle = styled.div`
  display: flex;
  flex: 2;
`;
const FooterRight = styled.div`
  display: flex;
  margin-right: 4rem;
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <FooterLeft>
        <Address />
      </FooterLeft>
      <FooterMiddle></FooterMiddle>
      <FooterRight>
        </FooterRight>
    </FooterContainer>
  );
}
