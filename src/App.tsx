import { useState } from "react";
import "./App.css";
import MainLayout from "./MainLayout";
import { UserContext } from "./context/UsersContext";

function App() {
  const [globalContext, setGlobalContext] = useState({
    users: [],
    currentUserId: 0,
    darkTheme: true,
    user: {
      subscription: "Subscribed",
    },
  });
  return (
    <>
      <UserContext.Provider
        value={{
          globalContext,
          setGlobalContext,
        }}
      >
        <MainLayout />
      </UserContext.Provider>
    </>
  );
}

export default App;
