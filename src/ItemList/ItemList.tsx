import { useContext } from "react";
import UserCard from "./components";
import { Header, ListWrapper, Text, ScrollWrapper } from "./styled";
import { UserContext } from "../context/UsersContext";
import { TypeUser } from "../types/types";

const ItemList = () => {
  const { globalContext } = useContext(UserContext);

  return (
    <ListWrapper darkTheme={globalContext.darkTheme}>
      <Header>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>Subscription</Text>
        <Text>Employment</Text>
      </Header>
      <ScrollWrapper>
        {globalContext.users &&
          globalContext.users.map((user: TypeUser, idx: number) => {
            return <UserCard key={idx} user={user} />;
          })}
      </ScrollWrapper>
    </ListWrapper>
  );
};

export default ItemList;
