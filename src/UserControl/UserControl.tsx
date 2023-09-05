import { FC } from "react";
import Button from "../components/ui/Button/Button";
import { Wrapper, Border, Label } from "./styled";
import Input from "../components/ui/Input";
import Switch from "../components/ui/Switch";

type Props = {
  nameValue: string;
  InsertUser: () => void;
  Delete: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserControl: FC<Props> = ({
  nameValue,
  InsertUser,
  Delete,
  onInputChange,
}) => {
  return (
    <Wrapper>
      <Label>Insert Row</Label>
      <Input value={nameValue} placeholder="Name" onChange={onInputChange} />
      <Button onClick={InsertUser} label="Insert" />
      <Border />
      <Switch />
      <Button onClick={Delete} label="Delete" />
    </Wrapper>
  );
};

export default UserControl;
