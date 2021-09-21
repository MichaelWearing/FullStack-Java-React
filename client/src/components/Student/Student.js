import React, { useState } from "react";
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
  EditFormWrapper,
  EditForm,
  EditFormSection,
  EditFormTitle,
  EditFormInput,
  EditFormClose,
  EditFormSubmit,
} from "./Student.styles";

export default function Student({
  id,
  name,
  email,
  dob,
  age,
  setStudents,
  teacherId,
}) {
  const [showEditForm, setShowEditForm] = useState(false);

  const [EditFormName, setEditFormName] = useState(name);
  const [EditFormEmail, setEditFormEmail] = useState(email);
  const [EditFormDOB, setEditFormDOB] = useState(dob);

  const closeEditForm = () => {
    setShowEditForm(false);
  };

  const deleteStudent = () => {
    console.log("Deleting student with Id: " + id);

    axios
      .delete(`http://localhost:8080/api/v1/student/${id}`)
      .then((response) => {
        axios
          .put("http://localhost:8080/api/v1/student", {
            teacherId: teacherId,
          })
          .then((response) => {
            setStudents(response.data);
          });
      });
  };

  const editStudent = () => {
    console.log("Editing student with Id: " + id);
    setShowEditForm(true);
  };

  const updateStudent = (e) => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:8080/api/v1/student/${id}?name=${EditFormName}&email=${EditFormEmail}`
      )
      .then((response) => {
        axios
          .put("http://localhost:8080/api/v1/student", {
            teacherId: teacherId,
          })
          .then((response) => {
            setStudents(response.data);
          });
      });

    console.log(
      "Updating student with ID of " + id,
      " Name from " + name + " to = ",
      EditFormName,
      " Email from " + email + " to = ",
      EditFormEmail,
      " DOB from " + dob + " to = ",
      EditFormDOB
    );

    setShowEditForm(false);
  };

  return (
    <>
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

      {showEditForm ? (
        <EditFormWrapper>
          <EditForm onSubmit={(e) => updateStudent(e)}>
            <EditFormSection>
              <EditFormTitle>Name: </EditFormTitle>
              <EditFormInput
                value={EditFormName}
                onChange={(e) => setEditFormName(e.currentTarget.value)}
              />
            </EditFormSection>
            <EditFormSection>
              <EditFormTitle>E-mail: </EditFormTitle>
              <EditFormInput
                value={EditFormEmail}
                onChange={(e) => setEditFormEmail(e.currentTarget.value)}
              />
            </EditFormSection>
            <EditFormSection>
              <EditFormTitle>Date of Birth: </EditFormTitle>
              <EditFormInput
                type="date"
                value={EditFormDOB}
                onChange={(e) => setEditFormDOB(e.currentTarget.value)}
              />
            </EditFormSection>
            <EditFormClose onClick={closeEditForm}>+</EditFormClose>
            <EditFormSubmit type="submit">Submit</EditFormSubmit>
          </EditForm>
        </EditFormWrapper>
      ) : null}
    </>
  );
}
