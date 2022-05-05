import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const FadedLink = styled.div`
  font-size: 1.2rem;
  color: #555;
  font-weight: 500;
  text-decoration: none;
  margin-bottom:1rem;
`;

export const BoldLink = styled.a`
  font-size: 1.2rem;
  color: #c8a21a;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom:1rem;
  height: 3.2rem;
  outline: none;
  border: 1px solid var(--color-bluedark);
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 1.2rem;
  border-radius:8px;
  &::placeholder {
    color: #999;
  }
  
  
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin: 1rem;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(55, 142, 190);
  background: linear-gradient(
    58deg,
    rgba(55, 142, 190, 1) 2%,
    rgba(77, 181, 255, 1) 15%,
    rgba(4, 37, 61, 1) 73%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 5rem;
  resize: none;
  outline: none;
  border: 1px solid var(--color-bluedark);
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 1.2rem;
  border-radius: 8px;
  &::placeholder {
    color: #999;
  }
`;