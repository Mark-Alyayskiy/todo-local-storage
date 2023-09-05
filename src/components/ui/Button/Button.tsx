import { FC } from "react";
import { ButtonWrapper } from "./styled";

type Props = {
  label: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ label, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>;
};

export default Button;
