import { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  FadedLink,
  SubmitButton,
  Textarea,
} from "./common";

import { AccountContext } from "./accountContext";

export function ContactForm(props) {
  const { switchToLogin } = useContext(AccountContext);
 
  return (
    <BoxContainer>
      <FormContainer action="https://submit-form.com/VYOGDzCJ">
        <label for="name">Name</label>
        <Input type="text" id="name" name="name" required="" />
        <label for="email">Email</label>
        <Input type="email" id="email" name="email" required="" />
        <label for="message">Message</label>
        <Textarea id="message" name="message" required=""></Textarea>
        <SubmitButton type="submit">Send</SubmitButton>
      </FormContainer>
      <FadedLink>
        Send a message or return to
        <BoldLink href="#" onClick={switchToLogin}>
          Login
        </BoldLink>
        form
      </FadedLink>
    </BoxContainer>
  );
}
