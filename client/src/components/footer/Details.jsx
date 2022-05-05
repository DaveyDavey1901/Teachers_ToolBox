import styled from "styled-components";

const MyAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export function SchDetails() {
  return (
    <>
      <InfoContainer>
        <MyAddress>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Subjects</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
          </ul>
        </MyAddress>
        <MyAddress>
          <ul>
            <li>
              <a href="/">School Website</a>
            </li>
            <li>
              <a href="#">About TT</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </MyAddress>
      </InfoContainer>
    </>
  );
}
