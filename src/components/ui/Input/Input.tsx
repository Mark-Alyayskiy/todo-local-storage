import { FC } from "react";
import {
  TextInput,
  WrapperInput,
  ButtonDown,
  ButtonUp,
  ButtonsBlock,
} from "./styled";
import { Arrow } from "../../../assets/svg";

type Props = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  ageValue?: number;
  number?: boolean;
  onAgeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addAge?: () => void;
  decreaseAge?: () => void;
};

const Input: FC<Props> = ({
  placeholder,
  value,
  onChange,
  ageValue,
  number,
  onAgeChange,
  addAge,
  decreaseAge,
}) => {
  return (
    <>
      {number ? (
        <WrapperInput>
          <TextInput
            type="number"
            placeholder={placeholder}
            value={ageValue}
            onChange={onAgeChange}
          />
          <ButtonsBlock>
            <ButtonUp onClick={addAge}>
              <Arrow />
            </ButtonUp>
            <ButtonDown onClick={decreaseAge}>
              <Arrow />
            </ButtonDown>
          </ButtonsBlock>
        </WrapperInput>
      ) : (
        <WrapperInput>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </WrapperInput>
      )}
    </>
  );
};

export default Input;
