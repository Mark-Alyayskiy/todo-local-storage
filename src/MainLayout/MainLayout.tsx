import { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList";
import UserControl from "../UserControl";
import { Wrapper } from "./styled";
import { UserContext } from "../context/UsersContext";
import { TypeUser } from "../types/types";

const MainLayout = () => {
  const [name, setName] = useState<string>("");
  const { usersContext, setUsersContext } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersContext.users));
  }, [usersContext.users]);

  const InsertUser = () => {
    const newUser = {
      id: Math.random(),
      name: name,
      age: 12,
      subscription: "Subscribed",
      employment: "Employed",
    };

    setUsersContext((prevUsersContext) => ({
      ...prevUsersContext,
      users: [...prevUsersContext.users, newUser],
    }));
    setName("");
  };

  const Delete = () => {
    const filteredUsers = usersContext.users.filter(
      (user: TypeUser) => user.id !== usersContext.currentUserId
    );
    setUsersContext((prevUsersContext) => ({
      ...prevUsersContext,
      users: filteredUsers,
    }));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Wrapper>
      <UserControl
        nameValue={name}
        onInputChange={onInputChange}
        InsertUser={InsertUser}
        Delete={Delete}
      />
      <ItemList />
    </Wrapper>
  );
};

export default MainLayout;
