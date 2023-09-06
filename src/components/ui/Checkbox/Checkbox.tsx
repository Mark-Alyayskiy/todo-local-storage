import { FC, useContext } from "react";
import { CheckboxContainer, Label, StyledInput } from "./styled";
import { UserContext } from "../../../context/UsersContext";

type Props = {
  label: string;
};

const Checkbox: FC<Props> = ({ label }) => {
  const { globalContext, setGlobalContext } = useContext(UserContext);

  return (
    <CheckboxContainer>
      <StyledInput
        onClick={() =>
          setGlobalContext({
            ...globalContext,
            user: {
              ...globalContext.user,
              employment: !globalContext.user.employment,
            },
          })
        }
        type="checkbox"
      />
      <Label darkTheme={globalContext.darkTheme}>{label}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
