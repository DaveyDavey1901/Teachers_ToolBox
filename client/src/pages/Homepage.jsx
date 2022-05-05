import React from "react";
import styled from "styled-components";
import TTImg from "../assets/images/HeroTT.avif";
import { TTSocials } from "../components/shared/Socials";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 7rem;
`;
const HomeSection = styled.div`
  text-align: center;
  justify-content: center;

  height: 100%;
  margin: 6rem 1rem auto 1rem;
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
          <Img
            src={TTImg}
            width="640"
            height="640"
            alt="Teachers Toolbox Main"
          />

          <small>&copy; Teachers_Toolbox. All rights reserved 2022</small>
        </TTImgWrapper>
        <TTSocials />
      </HomeSection>
    </HomeContainer>
  );
}
