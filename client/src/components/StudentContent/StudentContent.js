import React, { useState } from "react";
import axios from "axios";

// Components
import StudentCreation from "../StudentCreation/StudentCreation";
import StudentDisplay from "../StudentDisplay/StudentDisplay";

// Styled Components
import {
  Wrapper,
  EditFormWrapper,
  EditForm,
  EditFormSection,
  EditFormTitle,
  EditFormInput,
  EditFormClose,
  EditFormSubmit,
} from "./StudentContent.styles";

export default function StudentContent() {
  const [students, setStudents] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);

  const [EditFormID, setEditFormID] = useState(0);
  const [EditFormName, setEditFormName] = useState("Name");
  const [EditFormEmail, setEditFormEmail] = useState("E-mail");
  const [EditFormDOB, setEditFormDOB] = useState("D.O.B");

  const closeEditForm = () => {
    setShowEditForm(false);
  };

  const updateStudent = (e) => {
    e.preventDefault();

    /* axios
      .put(
        `http://localhost:8080/api/v1/student/2?name=SteBoB&email=michaelwearo@gmail.com`
      )
      .then((response) => {
        axios.get("http://localhost:8080/api/v1/student").then((response) => {
          setStudents(response.data);
        });
      }); */

    console.log(
      "Updating student with = ",
      EditFormID,
      EditFormName,
      EditFormEmail,
      EditFormDOB
    );

    setShowEditForm(false);
  };

  return (
    <Wrapper>
      <StudentCreation students={students} setStudents={setStudents} />
      <StudentDisplay
        students={students}
        setStudents={setStudents}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
        setEditFormID={setEditFormID}
        setEditFormName={setEditFormName}
        setEditFormEmail={setEditFormEmail}
        setEditFormDOB={setEditFormDOB}
      />

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
    </Wrapper>
  );
}
