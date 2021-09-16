import React, { useState } from "react";

// Components
import StudentCreation from "../StudentCreation/StudentCreation";
import StudentDisplay from "../StudentDisplay/StudentDisplay";

// Styled Components
import { Wrapper } from "./StudentContent.styles";

export default function StudentContent({
  teacherId,
  setTeacherId,
  setLoggedIn,
}) {
  const [students, setStudents] = useState([]);

  return (
    <Wrapper>
      <StudentCreation
        students={students}
        setStudents={setStudents}
        setTeacherId={setTeacherId}
        setLoggedIn={setLoggedIn}
      />
      <StudentDisplay
        students={students}
        setStudents={setStudents}
        teacherId={teacherId}
      />
    </Wrapper>
  );
}
