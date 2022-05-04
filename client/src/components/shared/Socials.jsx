import React from 'react'
import styled from "styled-components";
import {
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const Socials = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  position: absolute;
  position: fixed;
  bottom: 50%;
  right: 0;
  border: solid 2px #d9d9a0;
  padding: 1rem;
  border-radius: 12px 0 0 12px;
  background-color: var(--color-bluedark);
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: fixed;
    bottom: 7rem;
  }
`;

export function TTSocials() {

  return (
    <Socials>
      <a
        href="https://linkedin.com"
        rel="noreferrer"
        target="_blank"
        alt="LinkedIn"
      >
        <BsLinkedin size={15} />
      </a>
      <a
        href="https://twitter.com"
        rel="noreferrer"
        target="_blank"
        alt="Twitter"
      >
        <BsTwitter size={15} />
      </a>
      <a
        href="https://facebook.com"
        rel="noreferrer"
        target="_blank"
        alt="facebook"
      >
        <BsFacebook size={15} />
      </a>
      <a href="#contact" rel="noreferrer" target="_blank" alt="contact form">
        <BsFillEnvelopeFill size={15} />
      </a>
    </Socials>
  );
}

