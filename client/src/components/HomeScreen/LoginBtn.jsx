import React from "react";
import styled from "styled-components";
import {Button} from '../../styles/Buttons'


const BtnContainer = styled.div`
  margin: 2.5rem 0;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`

export function LoginBtn () {

  return (
    <BtnContainer>
      <Button href="#" >
        Login
      </Button>
      <Button href="#contact">Contact Us</Button>
    </BtnContainer>
  );
};

