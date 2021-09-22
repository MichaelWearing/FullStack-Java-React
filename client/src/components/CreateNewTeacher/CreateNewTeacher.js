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
  PasswordsDontMatch,
} from "./CreateNewTeacher.styles";

export default function CreateNewTeacher({ setCreatingNewTeacher }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchCheck, setPasswordMatchCheck] = useState(false);

  const createTeacher = (e) => {
    e.preventDefault();

    const passwordCheck = checkPasswordsMatch();

    if (passwordCheck) {
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
      setPasswordMatchCheck(false);
    } else {
      console.log("They don't match");
      setPassword("");
      setConfirmPassword("");
      setPasswordMatchCheck(true);
    }
  };

  const backToLogin = () => {
    setCreatingNewTeacher(false);
  };

  const checkPasswordsMatch = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
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

        {passwordMatchCheck === false ? null : (
          <PasswordsDontMatch>Passwords don't match!</PasswordsDontMatch>
        )}
        <SubmitButton>Submit</SubmitButton>
      </InputWrapper>
    </Wrapper>
  );
}
