import { FC, useContext } from "react";
import { TypeUser } from "../../types/types";
import { Wrapper, Text } from "./styled";
import { UserContext } from "../../context/UsersContext";

type Props = {
  user: TypeUser;
};

const UserCard: FC<Props> = ({ user }) => {
  const { globalContext, setGlobalContext } = useContext(UserContext);

  const isSelected = globalContext.usersId.includes(user.id);

  const toggleUserSelection = () => {
    let updatedUsersId: number[];
    if (isSelected) {
      updatedUsersId = globalContext.usersId.filter((id) => id !== user.id);
    } else {
      updatedUsersId = [...globalContext.usersId, user.id];
    }

    setGlobalContext((prevGlobalContext) => ({
      ...prevGlobalContext,
      usersId: updatedUsersId,
    }));
  };

  return (
    <Wrapper isSelected={!!isSelected} onClick={toggleUserSelection}>
      <Text>
        {user.name.length > 10 ? user.name.substring(0, 10) + "..." : user.name}
      </Text>
      <Text>{user.age}</Text>
      <Text>{user.subscription}</Text>
      <Text>{user.employment ? "Employed" : "Unemployed"}</Text>
    </Wrapper>
  );
};

export default UserCard;
