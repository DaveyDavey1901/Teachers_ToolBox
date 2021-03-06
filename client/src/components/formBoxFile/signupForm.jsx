import { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  FadedLink,
  SubmitButton,
} from "./common";

import { AccountContext } from "./accountContext";

import { AuthContext } from "../../context/authContext";
import { useForm } from "../../utils/hook";
import { useMutation } from "@apollo/react-hooks";

import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";

const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      username
      email
      password
      token
    }
  }
`;

export function SignUpForm(props) {
  const { switchToLogin } = useContext(AccountContext);
 const context = useContext(AuthContext);
 let navigate = useNavigate();
 const [errors, setErrors] = useState([]);

 function registerUserCallback() {
     registerUser();
 }

 const { onChange, onSubmit, values } = useForm(registerUserCallback, {
   username: "",
   email: "",
   password: "",
   confirmPassword: "",
 });

 const [registerUser] = useMutation(REGISTER_USER, {
   update(proxy, { data: { registerUser: userData } }) {
     context.logout(userData);
     navigate("/TTDashboard");
   },
   onError({ graphQLErrors }) {
     setErrors(graphQLErrors);
   },
   variables: { registerInput: values },
 });

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          label="Username"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />
        <Input
          label="Email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Input
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={onChange}
        />
      </FormContainer>
      {errors.map(function (error) {
        return <div severity="error">{error.message}</div>;
      })}
      <SubmitButton variant="contained" onClick={onSubmit}>
        Sign Up
      </SubmitButton>
      <FadedLink>
        Already have an account?
        <BoldLink href="#" onClick={switchToLogin}>
          Login
        </BoldLink>
      </FadedLink>
    </BoxContainer>
  );
}
