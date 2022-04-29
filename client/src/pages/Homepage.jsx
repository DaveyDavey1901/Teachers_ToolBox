import React from "react";
import styled from "styled-components";
import TTImg from "../assets/images/HeroTT.avif";
import { TTSocials } from "../components/shared/Socials";
import { LoginBtn } from "../components/HomeScreen/LoginBtn";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 7rem;
`;
const HomeSection = styled.div`
  text-align: center;
  justify-content: center;

  height: 100%;
  margin: 0 1rem;
  h1 {
    width: 100%;
    font-weight: 700;
  }
  p {
    width: 100%;
    font-size: 1.6rem;
  }
  
`;
const TTImgWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 2rem auto auto auto;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 60%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%
  }
`;

export function HomeP() {
  return (
    <HomeContainer>
      <HomeSection>
        <h1>Hello and Welcome</h1>
        <p>
          Please login or contact us if you would like to know more about{" "}
          <br></br>'The Teachers Toolbox'.
        </p>

        <TTImgWrapper>
          <img
            src={TTImg}
                        alt="Teachers Toolbox Main"
          />

          <LoginBtn />
          <small>&copy; Teachers_Toolbox. All rights reserved 2022</small>
        </TTImgWrapper>
        <TTSocials />
      </HomeSection>
    </HomeContainer>
  );
}
