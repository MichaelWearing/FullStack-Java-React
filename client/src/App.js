import { useState } from "react";

// Components
import StudentContent from "./components/StudentContent/StudentContent";
import Login from "./components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [teacherId, setTeacherId] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <>
      {loggedIn ? (
        <StudentContent
          setLoggedIn={setLoggedIn}
          teacherId={teacherId}
          setTeacherId={setTeacherId}
          loggedInUser={loggedInUser}
        />
      ) : (
        <Login
          setLoggedIn={setLoggedIn}
          setTeacherId={setTeacherId}
          setLoggedInUser={setLoggedInUser}
        />
      )}
    </>
  );
}

export default App;
