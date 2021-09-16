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
} from "./Login.styles";

export default function Login({ setLoggedIn, setTeacherId }) {
  const [creatingNewTeacher, setCreatingNewTeacher] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createNewTeacher = (e) => {
    e.preventDefault();

    setCreatingNewTeacher(true);
  };

  const authenticateUser = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/api/v1/teacher/login", {
        email: email,
        password: password,
      })

      .then((response) => setTeacherId(response.data.id))
      .then((response) => setLoggedIn(true));

      // If success log in and set as above,
      // If fail, make user aware they failed on frontend
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
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Input
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
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
