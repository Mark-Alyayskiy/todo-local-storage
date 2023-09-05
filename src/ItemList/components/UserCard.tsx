import { FC, useContext } from "react";
import { TypeUser } from "../../types/types";
import { Wrapper, Text } from "./styled";
import { UserContext } from "../../context/UsersContext";

type Props = {
  user: TypeUser;
};

const UserCard: FC<Props> = ({ user }) => {
  const { usersContext, setUsersContext } = useContext(UserContext);
  return (
    <Wrapper
      onClick={() =>
        setUsersContext({ ...usersContext, currentUserId: user.id })
      }
    >
      <Text>{user.name}</Text>
      <Text>{user.age}</Text>
      <Text>{user.subscription}</Text>
      <Text>{user.employment}</Text>
    </Wrapper>
  );
};

export default UserCard;
