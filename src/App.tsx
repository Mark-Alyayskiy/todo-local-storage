import { useState } from "react";
import "./App.css";
import MainLayout from "./MainLayout";
import { UserContext } from "./context/UsersContext";

function App() {
  const [usersContext, setUsersContext] = useState({
    users: [],
    currentUserId: 0,
  });
  return (
    <>
      <UserContext.Provider
        value={{
          usersContext,
          setUsersContext,
        }}
      >
        <MainLayout />
      </UserContext.Provider>
    </>
  );
}

export default App;
