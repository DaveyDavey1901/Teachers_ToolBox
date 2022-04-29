import React from "react";
import styled from "styled-components";
import Children3 from "../../assets/images/Children3.avif";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 200rem;
  margin:suto;
`;
const HomeSection = styled.div`
  text-align: center;
  justify-content: center;
  margin: 0 4rem;
  height: 100%;
  background-color: var(--color-primary-varient);
  border: solid 8px var(--color-bluedark);
  border-radius: 12px;
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
  width: 90%;
  margin: 4rem auto 0 auto;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export function NoticeBoard() {
  return (
    <HomeContainer>
        <TTImgWrapper>
          <img src={Children3} alt="group of kids" />
        </TTImgWrapper>
      <HomeSection>
        <h2>Feature Carousel Board</h2>
        <div></div>
      </HomeSection>
    </HomeContainer>
  );
}
