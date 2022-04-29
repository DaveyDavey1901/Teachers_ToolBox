import React from "react";
import styled from "styled-components";
import { TeachingResource,LearningActivities, Testing, SchoolStore} from "../TTDashboard/Carousel";
import DashFooter from '../../assets/images/footerOne.avif'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: auto;
  `;
const HomeSection = styled.div`
  text-align: center;
  justify-content: center;
  margin: 0 2rem;
  height: 100%;
  background-color: #d9d9a0;
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
  width: 100rem;
  height: auto;
  margin: 0 auto 12rem auto;
 
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
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
        <img src={DashFooter}  alt="group of kids" />
      </TTImgWrapper>
    </HomeContainer>
  );
}
