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
  loggedInUser,
}) {
  const [students, setStudents] = useState([]);

  return (
    <Wrapper>
      <StudentCreation
        students={students}
        setStudents={setStudents}
        teacherId={teacherId}
        setTeacherId={setTeacherId}
        setLoggedIn={setLoggedIn}
        loggedInUser={loggedInUser}
      />
      <StudentDisplay
        students={students}
        setStudents={setStudents}
        teacherId={teacherId}
      />
    </Wrapper>
  );
}
