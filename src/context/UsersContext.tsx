import { createContext } from "react";
import { TypeUser } from "../types/types";

type TypeGlobalContextUsers = {
  users: TypeUser[];
  currentUserId: number;
  setUsersContext: React.Dispatch<
    React.SetStateAction<{
      users: TypeUser[];
      currentUserId: number;
    }>
  >;
};

export const UserContext = createContext<TypeGlobalContextUsers>({
  users: [],
  currentUserId: 0,
  setUsersContext: () => {},
});
