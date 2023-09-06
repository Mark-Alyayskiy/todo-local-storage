import styled from "styled-components";
import { green, grey, small } from "../../../styled";

type Props = {
  darkTheme: boolean;
};

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label<Props>`
  font-size: ${small};
  display: flex;
  gap: 10px;
  /* color: ${(props) => (props.darkTheme ? grey : grey)}; */

  &:hover {
    &:before {
      border: 1px solid ${green};
    }
  }

  &:before {
    content: "";
    border: 1px solid ${green};
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
`;

export const StyledInput = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked + ${Label}:before {
    content: "✔";
  }
`;
