import React from "react";
import {
  dataActivity,
  dataTeaching,
  dataTesting,
  dataStore,
} from "../../data/content";
import styled from "styled-components";
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
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
  width: 40rem;
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

  p {
    font-weight: 700;
    
  }
`;

const TTImgWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Img = styled.img`
  width: 32rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

   @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 70%;
    
  }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 40%;
    
  }
`;

const ImgMD = styled.img`
  width: 50rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
   @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 70%;
  }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 60%;
    
  }

`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    
  }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    
  }
`;

export function TeachingResource() {
  return (
    <Section >
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="SwiperOne"
        >
          {dataTeaching.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h2>{name}</h2>
                    <small>{review}</small>
                  </CarouselInfo>
                </CarouselSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
      <TTImgWrapper>
        <ImgMD
          id="cOne"
          src={CarouselImg1}
          width="640"
          height="320"
          alt="girl flying on a book"
        />
      </TTImgWrapper>
    </Section>
  );
}

export function LearningActivities() {
  return (
    <Section className="cSectionRev">
      <TTImgWrapper>
        <Img
          id="cTwo"
          src={CarouselImg2}
          width="320"
          height="320"
          alt="group of kids"
        />
      </TTImgWrapper>
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
          }}
          className="SwiperOne"
        >
          {dataActivity.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h2>{name}</h2>
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
    <Section>
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          className="SwiperOne"
        >
          {dataTesting.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h2>{name}</h2>
                    <small>{review}</small>
                  </CarouselInfo>
                </CarouselSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
      <TTImgWrapper>
        <Img
          id="cThree"
          src={CarouselImg3}
          width="640"
          height="320"
          alt="group of kids"
        />
      </TTImgWrapper>
    </Section>
  );
}

export function SchoolStore() {
  return (
    <Section>
      <TTImgWrapper>
        <ImgMD
          id="cFour"
          src={CarouselImg4}
          width="320"
          height="320"
          alt="boy flying on pencil"
        />
      </TTImgWrapper>
      <CarouselContainer>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          className="SwiperOne"
        >
          {dataStore.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselSlide>
                  <CarouselInfo>
                    <h2>{name}</h2>
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
