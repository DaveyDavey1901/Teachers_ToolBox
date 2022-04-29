import styled from "styled-components";
import {SignOutBtn} from '../styles/Buttons'
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function SignOut(props) {
  const navigate = useNavigate();
  return (
    <LoginContainer>
       <SignOutBtn onClick={() => navigate('/')}>Sign Out</SignOutBtn>
    </LoginContainer>
  );
}
