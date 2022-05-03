import styled from "styled-components";

export const Button = styled.button`
  border-radius: 18px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 12rem;

  margin-right: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 6px;
  background-color: ${({ bg }) => bg || "#04253D"};
  color: ${({ color }) => color || "#ffff"};
  border: solid 2px var(--color-white);
  &:hover {
    transform: scale(0.98);

  }
`;

export const ButtonCta = styled.button`
  border-radius: 12px;
  border: none;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1rem;
  background-color: #ffdd19;
  color: #071b45;
  border: 0.1rem solid #071b45;

  &:hover {
    background-color: #fdf2f2;
    box-shadow: inset 0 0 0 0.2rem #ffdd19;
  }
`;

export const ButtonT = styled.button`
  border-radius: 12px;
  border: none;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1rem;
  background-color: #fdf2f2;
  color: #071b45;
  border: 0.1rem solid #071b45;

  &:hover {
    background-color: #fdf2f2;
    box-shadow: inset 0 0 0 0.2rem #ffdd19;
  }
`;

export const SignOutBtn = styled.button`
  border: 0;
  outline: 0;
  padding: 0.6rem 1rem;
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 12px;

  background-color: var(--color-bluedark);
  border: solid 2px var(--color-canaryyellow);
  &:hover {
    transform: scale(0.98);
  }
`;

export const LoginBtn = styled.button`
  border: 0;
  outline: 0;
  padding: 0.6rem 1rem;
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 12px;

  background-color: var(--color-bluedark);
  border: solid 2px var(--color-canaryyellow);
  &:hover {
    transform: scale(0.98);
  }
`;