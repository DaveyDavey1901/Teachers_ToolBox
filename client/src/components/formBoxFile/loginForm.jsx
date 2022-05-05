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

const LOGIN_USER = gql`
  mutation login($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      email
      username
      token
    }
  }
`;

export function LoginForm(props) {
  const { switchToSignup, switchToContact } = useContext(AccountContext);
  let navigate = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState([]);

  function loginUserCallback() {
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData } }) {
      context.login(userData);
      navigate("/TTDashboard");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values },
  });
  return (
    <BoxContainer>
      <FormContainer>
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
      </FormContainer>

      <FadedLink>
        Forget your password{" "}
        <BoldLink href="#" onClick={switchToContact}>
          Contact Us?
        </BoldLink>
      </FadedLink>

      {errors.map(function (error) {
        return <div severity="error">{error.message}</div>;
      })}
      <SubmitButton variant="contained" onClick={onSubmit}>
        Login
      </SubmitButton>

      <FadedLink>
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>
      </FadedLink>
    </BoxContainer>
  );
}
