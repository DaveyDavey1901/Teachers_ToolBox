import styled from "styled-components";
import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";


const MyAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  li {
    list-style: none;
    font-size: 1.6rem;
  }
  white-space: nowrap;
  margin-right: 3.8rem;
`;

const Hlight = styled.span`
  color: #ffdd19;
  margin: 0 1rem;
`;
const Socials = styled.div`
  display: flex;
  gap:1rem;
  margin:1rem 0rem;
`;
export function Address() {
  return (
    <MyAddress>
      <ul>
        <li>
          <Hlight>Address:</Hlight> Wigan, Greater Manchester, UK
        </li>
        <li>
          <Hlight>My Email:</Hlight> David_Davies@mail.com
        </li>
        <li>
          <Hlight>Phone Number:</Hlight> 00022 2233445
        </li>
        <li>
          <Hlight>Fax Number:</Hlight> 22542 333223
        </li>
      </ul>
      <Socials>
        <a
          href="https://facebook.com"
          rel="noreferrer"
          target="_blank"
          alt="Facebook"
        >
          <BsLinkedin size={22} />
        </a>
        <a
          href="https://twitter.com"
          rel="noreferrer"
          target="_blank"
          alt="Twitter"
        >
          <BsTwitter size={22} />
        </a>
        <a
          href="https://www.whatsapp.com/"
          rel="noreferrer"
          target="_blank"
          alt="Whatsapp"
        >
          <BsWhatsapp size={22} />
        </a>
      </Socials>
    </MyAddress>
  );
}
