import { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList";
import UserControl from "../UserControl";
import { Wrapper, Container } from "./styled";
import { UserContext } from "../context/UsersContext";
import { TypeUser } from "../types/types";

const MainLayout = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | undefined>();
  const [users, setUsers] = useState<TypeUser[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const { globalContext, setGlobalContext } = useContext(UserContext);

  const dropdownOptions = ["Subscribed", "Not subscribed", "Other"];

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(users));
    setGlobalContext({ ...globalContext, users: users });
  }, [users]);

  const InsertUser = () => {
    if (!name || !age) {
      alert("Введите имя и возраст перед добавлением пользователя");
      return;
    }

    const newUser = {
      id: Math.random(),
      name: name,
      age: age,
      subscription: globalContext.user.subscription,
      employment: globalContext.user.employment,
    };
    setUsers([...users, newUser]);
    setName("");
  };

  const Delete = () => {
    const filteredUsers = globalContext.users.filter(
      (user: TypeUser) => !globalContext.usersId.includes(user.id)
    );
    setGlobalContext((prevGlobalContext) => ({
      ...prevGlobalContext,
      users: filteredUsers,
    }));
    setUsers(filteredUsers);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onAgeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(+e.target.value);
  };

  const decreaseAge = () => {
    if (age) {
      const newAge = age - 1;
      setAge(newAge);
    }
  };

  const addAge = () => {
    if (age) {
      const newAge = age + 1;
      setAge(newAge);
    }
  };

  return (
    <Wrapper darkTheme={globalContext.darkTheme}>
      <Container>
        <UserControl
          decreaseAge={decreaseAge}
          addAge={addAge}
          onAgeInputChange={onAgeInputChange}
          dropdownOptions={dropdownOptions}
          nameValue={name}
          ageValue={age}
          onInputChange={onInputChange}
          InsertUser={InsertUser}
          Delete={Delete}
        />
        <ItemList />
      </Container>
    </Wrapper>
  );
};

export default MainLayout;
