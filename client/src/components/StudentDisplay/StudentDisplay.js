import React, { useEffect } from "react";
import axios from "axios";

// Components
import Student from "../Student/Student";

// Styled Components
import { Wrapper, Title, StudentList } from "./StudentDisplay.styles";

export default function StudentDisplay({ students, setStudents }) {
  /* const [students, setStudents] = useState([]); */

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/student").then((response) => {
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
