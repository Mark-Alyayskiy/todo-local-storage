import { useState } from "react";
import "./App.css";
import MainLayout from "./MainLayout";
import { TypeGlobalContextUsers, UserContext } from "./context/UsersContext";

function App() {
  const [globalContext, setGlobalContext] = useState<
    TypeGlobalContextUsers["globalContext"]
  >({
    users: [],
    usersId: [],
    darkTheme: true, // Добавьте darkTheme с соответствующим значением
    user: {
      id: 0,
      name: "",
      age: 0,
      subscription: "Subscribed",
      employment: false,
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
