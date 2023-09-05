import { FC } from "react";
import { TextInput, WrapperInput } from "./styled";

type Props = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <WrapperInput>
      <TextInput placeholder={placeholder} value={value} onChange={onChange} />
    </WrapperInput>
  );
};

export default Input;
