import styled from "styled-components";

export const Button = styled.button`
  border-radius: 18px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 12rem;

  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem;
  background-color: ${({ bg }) => bg || "#04253D"};
  color: ${({ color }) => color || "#ffff"};
  border: solid 2px var(--color-white);
  &:hover {
        transform: scale(0.98);
  }
`;
