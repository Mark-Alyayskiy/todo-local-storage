import styled from "styled-components";
import { lightGrey } from "../../../styled";

export const ButtonWrapper = styled.button`
  width: 100%;
  padding: 5px;
  background-color: ${lightGrey};
  font-weight: 300;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.2s;
  }
`;
