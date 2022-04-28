import React from "react";
import styled from "styled-components";
import TTImg from "../../assets/images/HeroTT.avif";
import { TTSocials } from "../../components/shared/Socials";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 5rem;
`;
const HomeSection = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 5rem;
  height: 100%;
  
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
  width: 40%;
  height: auto;
  margin: 2rem auto auto auto;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export function DashHeader() {
  return (
    <HomeContainer>
      <HomeSection>
        <h1>Welcome Back</h1>
        <TTImgWrapper>
          <img src={TTImg} alt="Teachers Toolbox Main" />
        </TTImgWrapper>
        <TTSocials />
      </HomeSection>
    </HomeContainer>
  );
}
