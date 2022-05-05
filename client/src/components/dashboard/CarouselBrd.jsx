import React from "react";
import styled from "styled-components";
import { TeachingResource,LearningActivities, Testing, SchoolStore} from "../dashboard/Carousel";
import DashFooter from '../../assets/images/footerOne.avif'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 80%;
  margin: 0 auto;
  `;
const HomeSection = styled.div`
  text-align: center;
  justify-content: center;
  margin: 0 2rem;
  height: 100%;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  border: solid 8px var(--color-bluedark);
  border-radius: 12px;
`;

const Info = styled.div`
  text-align: center;
  justify-content: center;
  margin: 0 4rem;

  h2 {
    font-weight: 700;
    font-size: 4.4rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

const TTImgWrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto 12rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
`;
const ImgMD = styled.img`
  width: 90rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
   @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    
  }

`;
export function FeatureCarousels() {
  return (
    <HomeContainer>
      <HomeSection>
        <Info>
          <h2>Feature Carousel Board</h2>
          <p>
            Here we feature details of each of the main sections as well as some
            of the most used and highest rated content
          </p>
        </Info>
        <TeachingResource />
        <LearningActivities />
        <Testing />
        <SchoolStore />
      </HomeSection>
      <TTImgWrapper>
        <ImgMD src={DashFooter} width="320" height="320" alt="group of kids" />
      </TTImgWrapper>
    </HomeContainer>
  );
}
