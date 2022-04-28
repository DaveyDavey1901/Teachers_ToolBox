import React from "react";
import styled from "styled-components";
import {Button} from '../../styles/Buttons'
import { useNavigate } from "react-router-dom";

const BtnContainer = styled.div`
  margin: 2.5rem 0;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`

export function LoginBtn () {
  const navigate = useNavigate();
  
  return (
    <BtnContainer>
      <Button onClick={() => navigate('/ttdashboard')}>Login</Button>
    
      <Button href="#contact">Contact Us</Button>
    </BtnContainer>
  );
};

