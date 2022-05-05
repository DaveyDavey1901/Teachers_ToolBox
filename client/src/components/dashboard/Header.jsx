import React from "react";
import styled from "styled-components";
import TTImg from "../../assets/images/HeroTT.avif";
import { TTSocials } from "../shared/Socials";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 50%;
  padding-top: 5rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

const HomeSection = styled.div`
  text-align: center;
  justify-content: center;
  margin: 5rem;
  padding: 1rem;
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
  width: 100%;
  height: auto;
  margin: 2rem auto auto auto;
`;
const Img = styled.img`
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export function DashHeader() {
  return (
    <HomeContainer>
      <HomeSection>
        <h1>Welcome Back</h1>
        <TTImgWrapper>
          <Img src={TTImg} alt="Teachers Toolbox Main" />
        </TTImgWrapper>
        <TTSocials />
      </HomeSection>
    </HomeContainer>
  );
}
