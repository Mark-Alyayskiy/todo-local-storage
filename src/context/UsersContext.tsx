import { createContext } from "react";
import { TypeUser } from "../types/types";

export type TypeGlobalContextUsers = {
  globalContext: {
    users: TypeUser[];
    usersId: number[];
    darkTheme: boolean;
    user: TypeUser;
  };
  setGlobalContext: React.Dispatch<
    React.SetStateAction<{
      users: TypeUser[];
      usersId: number[];
      darkTheme: boolean;
      user: TypeUser;
    }>
  >;
};

export const UserContext = createContext<TypeGlobalContextUsers>({
  globalContext: {
    users: [],
    usersId: [],
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
