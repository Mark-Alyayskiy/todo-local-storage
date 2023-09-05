import { useContext, useEffect, useState } from "react";
import UserCard from "./components";
import { Header, ListWrapper, Text } from "./styled";
import { UserContext } from "../context/UsersContext";

const ItemList = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const { usersContext } = useContext(UserContext);

  console.log("usersContext", usersContext);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addTask = () => {
    const newTask = {
      id: Math.random(),
      name: "sfsf",
      age: 12,
      subscription: "Subscribed",
      employment: "Employed",
    };
    setUsers([...users, newTask]);
  };

  // console.log("users", users);

  return (
    <ListWrapper>
      <Header>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>Subscription</Text>
        <Text>Employment</Text>
      </Header>
      {usersContext.users &&
        usersContext.users.map((user: any) => {
          return <UserCard user={user} />;
        })}
    </ListWrapper>
  );
};

export default ItemList;
