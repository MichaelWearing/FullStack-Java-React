import React, { useState } from "react";

// Components
import StudentCreation from "../StudentCreation/StudentCreation";
import StudentDisplay from "../StudentDisplay/StudentDisplay";

// Styled Components
import { Wrapper } from "./StudentContent.styles";

export default function StudentContent() {
  const [students, setStudents] = useState([]);

  return (
    <Wrapper>
      <StudentCreation students={students} setStudents={setStudents} />
      <StudentDisplay students={students} setStudents={setStudents} />
    </Wrapper>
  );
}
