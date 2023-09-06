import { createContext } from "react";
import { TypeUser } from "../types/types";

type TypeGlobalContextUsers = {
  globalContext: {
    users: TypeUser[];
    currentUserId: number;
    darkTheme: boolean;
    user: TypeUser;
  };
  setGlobalContext: React.Dispatch<
    React.SetStateAction<{
      users: TypeUser[];
      currentUserId: number;
      user: TypeUser;
    }>
  >;
};

export const UserContext = createContext<TypeGlobalContextUsers>({
  globalContext: {
    users: [],
    currentUserId: 0,
    darkTheme: true,
    user: {
      id: 0,
      name: "",
      age: 0,
      subscription: "Subscribed",
      employment: false,
    },
  },
  setGlobalContext: () => {},
});
