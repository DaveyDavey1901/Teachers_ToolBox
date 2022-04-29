import React from "react";
import {dataActivity, dataTeaching, dataTesting, dataStore} from "../../data/content";
import styled from "styled-components";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import images
import CarouselImg1 from "../../assets/images/carouselOne.avif";
import CarouselImg2 from "../../assets/images/carouselTwo.avif";
import CarouselImg3 from "../../assets/images/carouselThree.avif";
import CarouselImg4 from "../../assets/images/carouselFour.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CarouselContainer = styled.div`
display: flex;
  width: 60rem;
  height:35rem;
  margin: 4rem;
  justify - content: center;
  align - items: center;
  background-color: var(--color-bg-varient);
  border: 2px solid var(--color-bluedark);
  padding: 2rem;
  border-radius: 2rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width:40rem;
    margin: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50rem;
    margin: 2rem;
  }
`;
const CarouselSlide = styled.div`
  background-color: var(--color-white);
  border: 2px solid var(--color-bluedark);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
  height: 25rem;
`;

const CarouselInfo = styled.div`
  display: block;
  color: var(--color-light);
  color: #000;
  font-size: 1.6rem;
  width: 80%;
  margin: auto;

  h5 {
    font-weight: 700;
    font-size: 2.2rem;
  }
`;

const TTImgWrapper = styled.div`
  width: 100%;

  #cOne, #cThree{
    height:24rem;
    width:24rem;
    align-items : center;
    justify-content: center;
    margin:0 auto ;
  }

  
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 60%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {}
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    
  }
`;

export function TeachingResource() {
  return (
    <Section id="cSectionOdd">
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {dataTeaching.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h5>{name}</h5>
                    <small>{review}</small>
                  </CarouselInfo>
                </CarouselSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
      <TTImgWrapper>
        <img src={CarouselImg1} alt="girl flying on a book" />
      </TTImgWrapper>
    </Section>
  );
}

export function LearningActivities() {
  return (
    <Section >
      <TTImgWrapper>
        <img id="cOne" src={CarouselImg2} alt="group of kids" />
      </TTImgWrapper>
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {dataActivity.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h5>{name}</h5>
                    <small>{review}</small>
                  </CarouselInfo>
                </CarouselSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
    </Section>
  );
}

export function Testing() {
  return (
    <Section >
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {dataTesting.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h5>{name}</h5>
                    <small>{review}</small>
                  </CarouselInfo>
                </CarouselSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
      <TTImgWrapper>
        <img id="cThree" src={CarouselImg3} alt="group of kids" />
      </TTImgWrapper>
    </Section>
  );
}

export function SchoolStore() {
  return (
    <Section>
      <TTImgWrapper>
        <img src={CarouselImg4} alt="boy flying on pencil" />
      </TTImgWrapper>
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {dataStore.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h5>{name}</h5>
                    <small>{review}</small>
                  </CarouselInfo>
                </CarouselSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
    </Section>
  );
}
