import React, { useState } from "react";
import axios from "axios";

// React-Icons
import {} from "react-icons/fa";

// Components
import CreateNewTeacher from "../CreateNewTeacher/CreateNewTeacher";

// Styled Components
import {
  Wrapper,
  Title,
  InputWrapper,
  Input,
  SubmitButton,
  CreateNewUser,
  ErrorMessage,
} from "./Login.styles";

export default function Login({ setLoggedIn, setTeacherId, setLoggedInUser }) {
  const [creatingNewTeacher, setCreatingNewTeacher] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [validEmailCheck, setValidEmailCheck] = useState(true);
  const [userExists, setUserExists] = useState(true);

  const createNewTeacher = (e) => {
    e.preventDefault();

    setValidEmailCheck(true);
    setUserExists(true);
    setCreatingNewTeacher(true);
  };

  const authenticateUser = async (e) => {
    e.preventDefault();

    const emailCheck = checkForValidEmail();
    if (emailCheck) {
      setValidEmailCheck(true);
      setUserExists(true);
      try {
        await axios
          .post("http://localhost:8080/api/v1/teacher/login", {
            email: loginEmail,
            password: loginPassword,
          })

          .then((response) => setTeacherId(response.data.id))
          .then((response) => setLoggedIn(true));
        setLoggedInUser(loginEmail);
      } catch (e) {
        setUserExists(false);
      }
    } else {
      setLoginEmail("");
      setLoginPassword("");
      setValidEmailCheck(false);
    }

    // If success log in and set as above,
    // If fail, make user aware they failed on frontend
  };

  const checkForValidEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(loginEmail);
  };

  return (
    <>
      {creatingNewTeacher ? (
        <CreateNewTeacher setCreatingNewTeacher={setCreatingNewTeacher} />
      ) : (
        <Wrapper>
          <Title>Login</Title>
          <InputWrapper onSubmit={(e) => authenticateUser(e)}>
            <Input
              placeholder={"E-mail"}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.currentTarget.value)}
            />
            {validEmailCheck ? null : (
              <ErrorMessage>Email is not valid</ErrorMessage>
            )}
            <Input
              placeholder={"Password"}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.currentTarget.value)}
            />
            {userExists ? null : (
              <ErrorMessage>No user exists with those credentials</ErrorMessage>
            )}
            <SubmitButton>Submit</SubmitButton>
            <CreateNewUser onClick={(e) => createNewTeacher(e)}>
              Create new teacher account
            </CreateNewUser>
          </InputWrapper>
        </Wrapper>
      )}
    </>
  );
}
