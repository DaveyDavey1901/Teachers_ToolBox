import styled from "styled-components";

const MyAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
    font-size:1.6rem;
  }
  white-space: nowrap;
  margin-right: 3.8rem;
  
  
`;

const Hlight = styled.span`
  color: #ffdd19;
  margin: 0 1rem;
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
      </ul>
    </MyAddress>
  );
}
