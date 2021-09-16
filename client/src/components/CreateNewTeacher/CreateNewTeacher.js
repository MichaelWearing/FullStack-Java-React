import React, { useState } from "react";
import axios from "axios";

// React-Icons
import { FaArrowLeft } from "react-icons/fa";

// Styled Components
import {
  Wrapper,
  Title,
  EditFormClose,
  InputWrapper,
  Input,
  SubmitButton,
} from "./CreateNewTeacher.styles";

export default function CreateNewTeacher({ setCreatingNewTeacher }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createTeacher = (e) => {
    e.preventDefault();

    checkPasswordsMatch();

    axios
      .post("http://localhost:8080/api/v1/teacher", {
        email: email,
        password: password,
      })
      .then((response) => console.log(response));

    console.log(email, password, confirmPassword);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCreatingNewTeacher(false);
  };

  const backToLogin = () => {
    setCreatingNewTeacher(false);
  };

  const checkPasswordsMatch = () => {
    console.log("Add this functionality later");
  };

  return (
    <Wrapper>
      <EditFormClose onClick={backToLogin}>
        <FaArrowLeft />
      </EditFormClose>
      <Title>New Teacher</Title>
      <InputWrapper onSubmit={(e) => createTeacher(e)}>
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
        <Input
          placeholder={"Confirm Password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <SubmitButton>Submit</SubmitButton>
      </InputWrapper>
    </Wrapper>
  );
}
