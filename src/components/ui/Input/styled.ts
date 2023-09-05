import styled from "styled-components";
import { grey, lightGrey } from "../../../styled";

export const WrapperInput = styled.div`
  width: 100%;
  position: relative;
  height: 26px;
  border: 1px solid ${lightGrey};
  border-radius: 5px;
`;
export const TextInput = styled.input`
  width: 100%;
  width: calc(100% - 8px);
  border: none;
  background-color: ${grey};
`;
