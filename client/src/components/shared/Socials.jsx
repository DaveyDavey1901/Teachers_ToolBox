import React from 'react'
import styled from "styled-components";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

const Socials = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50%;
  right: 0;
  border: solid 2px var(--color-white);
  padding: 1rem;
  border-radius: 12px 0 0 12px;
  background-color: var(--color-bluedark);

    @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export function TTSocials() {

  return (
    <Socials>
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <BsLinkedin size={15} />
      </a>
      <a href="https://twitter.com" rel="noreferrer" target="_blank">
        <BsTwitter size={15} />
      </a>
      <a href="https://facebook.com" rel="noreferrer" target="_blank">
        <BsFacebook size={15} />
      </a>
    </Socials>
  );
}

