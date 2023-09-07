import { FC, useContext } from "react";
import Button from "../components/ui/Button/Button";
import { Wrapper, Border, Label } from "./styled";
import Input from "../components/ui/Input";
import Switch from "../components/ui/Switch";
import SelectDropdown from "../components/ui/SelectDropdown";
import Checkbox from "../components/ui/Checkbox";
import { UserContext } from "../context/UsersContext";

type Props = {
  nameValue: string;
  InsertUser: () => void;
  Delete: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dropdownOptions: string[];
  onAgeInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ageValue?: number;
  decreaseAge?: () => void;
  addAge?: () => void;
};

const UserControl: FC<Props> = ({
  nameValue,
  InsertUser,
  Delete,
  onInputChange,
  dropdownOptions,
  onAgeInputChange,
  ageValue,
  decreaseAge,
  addAge,
}) => {
  const { globalContext } = useContext(UserContext);

  return (
    <Wrapper darkTheme={globalContext.darkTheme}>
      <Label>Insert Row</Label>
      <Input value={nameValue} placeholder="Name" onChange={onInputChange} />
      <Input
        ageValue={ageValue}
        placeholder="Age"
        onAgeChange={onAgeInputChange}
        number
        decreaseAge={decreaseAge}
        addAge={addAge}
      />
      <SelectDropdown options={dropdownOptions} />
      <Button onClick={InsertUser} label="Insert" />
      <Checkbox label="Employed" />
      <Border />
      <Switch />
      <Button
        onClick={Delete}
        label={globalContext.usersId.length > 1 ? "Delete multiple" : "Delete"}
      />
    </Wrapper>
  );
};

export default UserControl;
