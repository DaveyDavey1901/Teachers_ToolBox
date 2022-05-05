import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignUpForm } from "./signupForm";
import { ContactForm } from "./contactForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
`;

const FormContainer = styled.div`
  width: 36rem;
  min-height: 58rem;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: var(--color-white);
  position: relative;
  overflow: hidden;
`;

const TopFormBox = styled.div`
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.6rem;
  padding-bottom: 1rem;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -29rem;
  left: -15rem;
background: rgb(55,142,190);
background: linear-gradient(58deg, rgba(55,142,190,1) 2%, rgba(77,181,255,1) 4%, rgba(4,37,61,1) 73%);
  );
`;

const BackDro = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: -56rem;
  left: -15rem;
  background: rgb(186, 162, 76);
  background: linear-gradient(
    58deg,
    rgba(186, 162, 76, 1) 2%,
    rgba(176, 140, 9, 1) 18%,
    rgba(245, 214, 103, 1) 53%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  z-index: 10;
  margin: 0;
  margin-top: 1rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "105rem",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "55rem",
    borderRadius: "50%",
    transform: "rotate(60deg)",
    
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.5,
  stiffness: 30,
};

export function FormBoxFile(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("login");

  const playAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToLogin = () => {
    playAnimation();
    setTimeout(() => {
      setActive("login");
    }, 400);
  };
  const switchToContact = () => {
    playAnimation();
    setTimeout(() => {
      setActive("contact");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToLogin, switchToContact };

  return (
    <AccountContext.Provider value={contextValue}>
      <Container>
        <FormContainer>
          <TopFormBox>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "login" && (
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please Login to Continue!</SmallText>
              </HeaderContainer>
            )}
            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please Sign Up to continue!</SmallText>
              </HeaderContainer>
            )}
            {active === "contact" && (
              <HeaderContainer>
                <HeaderText>Send A</HeaderText>
                <HeaderText>Message</HeaderText>
                <SmallText>Please contact us with any questions you may have.</SmallText>
              </HeaderContainer>
            )}
          </TopFormBox>
          <InnerContainer>
            {active === "login" && <LoginForm />}
            {active === "signup" && <SignUpForm />}
            {active === "contact" && <ContactForm />}
          </InnerContainer>
          <BackDro
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
        </FormContainer>
      </Container>
    </AccountContext.Provider>
  );
}
