import styled from "styled-components";

const MyAddress = styled.div`
  display: flex;
  flex-direction: column;
    li {
    list-style: none;
    font-size: 1.6rem;
  }
  white-space: nowrap;
  margin-right: 3.8rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:2rem;
`;
export function SchDetails() {
  return (
    <>
      <InfoContainer>
        <MyAddress>
          <ul>
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#top">Subjects</a>
            </li>
            <li>
              <a href="#top">Store</a>
            </li>
            <li>
              <a href="#top">Dashboard</a>
            </li>
          </ul>
        </MyAddress>
        <MyAddress>
          <ul>
            <li>
              <a href="#top">School Website</a>
            </li>
            <li>
              <a href="#top">About TT</a>
            </li>
            <li>
              <a href="#top">Our Services</a>
            </li>
            <li>
              <a href="#top">Contact Us</a>
            </li>
          </ul>
        </MyAddress>
      </InfoContainer>
    </>
  );
}
