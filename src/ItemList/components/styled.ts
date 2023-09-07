import styled from "styled-components";
import { grey, lightGrey, small } from "../../styled";

type Props = {
  isSelected: boolean;
};

export const Wrapper = styled.button<Props>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.isSelected ? grey : lightGrey)};
  padding: 5px;
  font-size: ${small};
`;

export const Text = styled.div``;
