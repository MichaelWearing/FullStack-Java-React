import React, { useEffect } from "react";
import axios from "axios";

// Components
import Student from "../Student/Student";

// Styled Components
import { Wrapper, Title, StudentList } from "./StudentDisplay.styles";

export default function StudentDisplay({
  students,
  setStudents,
  showEditForm,
  setShowEditForm,
  teacherId,
}) {
  /* const [students, setStudents] = useState([]); */

  useEffect(() => {
    //console.log("Setting teacher Id = ", teacherId, " ....");
    console.log(teacherId);
    axios
      .put("http://localhost:8080/api/v1/student", {
        teacherId: teacherId,
      })
      .then((response) => {
        setStudents(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const printStudents = () => {
    return students.map((student) => {
      return (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          email={student.email}
          dob={student.dob}
          age={student.age}
          setStudents={setStudents}
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
        />
      );
    });
  };

  return (
    <Wrapper>
      <Title>StudentDisplay</Title>
      <StudentList>{printStudents()}</StudentList>
    </Wrapper>
  );
}
