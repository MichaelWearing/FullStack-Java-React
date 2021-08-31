import React, { useState } from "react";
import axios from "axios";

// Styled Components
import {
  Wrapper,
  Title,
  InputWrapper,
  Input,
  SubmitButton,
} from "./StudentCreation.styles";

export default function StudentCreation({ students, setStudents }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const createStudent = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/v1/student", {
        name: name,
        email: email,
        dob: dob,
      })
      .then((response) => {
        axios.get("http://localhost:8080/api/v1/student").then((response) => {
          setStudents(response.data);
        });
      });

    console.log(name, email, dob);
  };

  return (
    <Wrapper>
      <Title>StudentCreation</Title>
      <InputWrapper onSubmit={(e) => createStudent(e)}>
        <Input
          placeholder={"Name"}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <Input
          placeholder={"E-mail"}
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          type="date"
          placeholder={"Date of Birth"}
          value={dob}
          onChange={(e) => setDob(e.currentTarget.value)}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </InputWrapper>
    </Wrapper>
  );
}
