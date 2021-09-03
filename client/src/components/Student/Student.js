import React from "react";
import axios from "axios";

// React-Icons
import { FaPencilAlt, FaTrash } from "react-icons/fa";

// Styled Components
import {
  Wrapper,
  InfoWrapper,
  InfoTitle,
  InfoValue,
  IconWrapper,
  Icons,
} from "./Student.styles";

export default function Student({
  id,
  name,
  email,
  dob,
  age,
  setStudents,
  showEditForm,
  setShowEditForm,
}) {
  const deleteStudent = () => {
    console.log("Deleting student with Id: " + id);

    axios
      .delete(`http://localhost:8080/api/v1/student/${id}`)
      .then((response) => {
        axios.get("http://localhost:8080/api/v1/student").then((response) => {
          setStudents(response.data);
        });
      });
  };

  const editStudent = () => {
    console.log("Editing student with Id: " + id);
    setShowEditForm(true);
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <InfoTitle>Id: </InfoTitle>
        <InfoValue>{id}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>Name: </InfoTitle>
        <InfoValue>{name}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>E-mail: </InfoTitle>
        <InfoValue>{email}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>D.O.B: </InfoTitle>
        <InfoValue>{dob}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>Age: </InfoTitle>
        <InfoValue>{age}</InfoValue>
      </InfoWrapper>
      <IconWrapper>
        <Icons>
          <FaTrash onClick={deleteStudent} />
        </Icons>
        <Icons>
          <FaPencilAlt onClick={editStudent} />
        </Icons>
      </IconWrapper>
    </Wrapper>
  );
}
