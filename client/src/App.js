import { useState } from "react";

// Components
import StudentContent from "./components/StudentContent/StudentContent";
import Login from "./components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [teacherId, setTeacherId] = useState("");

  return (
    <>
      {loggedIn ? (
        <StudentContent
          setLoggedIn={setLoggedIn}
          teacherId={teacherId}
          setTeacherId={setTeacherId}
        />
      ) : (
        <Login setLoggedIn={setLoggedIn} setTeacherId={setTeacherId} />
      )}
    </>
  );
}

export default App;
