import styled from "styled-components";
import { grey, lightGrey } from "../../../styled";

export const WrapperInput = styled.div`
  width: 100%;
  position: relative;
  height: 30px;
  border: 1px solid ${lightGrey};
  border-radius: 5px;
`;
export const TextInput = styled.input`
  width: 100%;
  width: calc(100% - 4px);
  border-radius: 5px;
  border: none;
  height: 28px;
  background-color: ${grey};
`;

export const ButtonUp = styled.button`
  position: absolute;
  background-color: ${lightGrey};
  border: none;
  height: 30px;
  width: 30px;
  top: 0;
  right: 0;
  z-index: 1;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export const ButtonDown = styled.button`
  position: absolute;
  background-color: ${lightGrey};
  border: none;
  height: 30px;
  width: 30px;
  top: 0;
  right: 30px;
  z-index: 1;
  cursor: pointer;
`;

export const ButtonsBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 50px;
`;
