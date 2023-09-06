import { FC, useContext, useState } from "react";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Button,
} from "./styled";
import { Arrow } from "../../../assets/svg";
import { UserContext } from "../../../context/UsersContext";

type Props = {
  options: string[];
};

const SelectDropdown: FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const { globalContext, setGlobalContext } = useContext(UserContext);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setGlobalContext({
      ...globalContext,
      user: {
        ...globalContext.user,
        subscription: value,
      },
    });
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader isOpen={isOpen}>
          {selectedOption || "Subscribed"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
        <Button onClick={toggling}>
          <Arrow />
        </Button>
      </DropDownContainer>
    </Main>
  );
};

export default SelectDropdown;
