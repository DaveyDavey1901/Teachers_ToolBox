import styled from "styled-components";
import {SignOutBtn} from '../styles/Buttons'
import { useNavigate } from "react-router-dom";


import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Button } from "../styles/Buttons";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:Button{
    margin-right: 1rem;
  }
`;

export function LogOut(props) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate("/");
  };
  console.log(user);
  return (
    <LoginContainer>
      {user ? (
        <>
          <SignOutBtn
            
            onClick={onLogout}
          >
            Logout
          </SignOutBtn>
        </>
      ) : (
        <>
          {" "}
          <Button onClick={() => navigate('/login')}>Login</Button>
           
        </>
      )}
         </LoginContainer>
  );
}
  
 