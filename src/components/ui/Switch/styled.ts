import styled from "styled-components";
import { green, grey } from "../../../styled";

type Props = {
  toggle: boolean;
};

export const SwitchWrapper = styled.label<Props>`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ toggle }) => (toggle ? grey : "white")};
  border-radius: 15px;
  transition: 0.4s;
`;

export const Slider = styled.span<Props>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggle }) => (!toggle ? green : "white")};
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    content: "";

    position: absolute;
    left: 5px;
    bottom: 5px;

    width: 15px;
    height: 15px;
    border-radius: 100%;

    background-color: ${({ toggle }) => (!toggle ? grey : green)};

    transition: 0.4s;
  }
`;

export const Input = styled.input<Props>`
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`;
