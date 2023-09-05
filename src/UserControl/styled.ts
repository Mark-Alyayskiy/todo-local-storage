import styled from "styled-components";
import { grey, lightGrey } from "../styled";

export const Label = styled.div`
  width: 100px;
  position: absolute;
  font-size: 12px;
  top: -10px;
  left: -10px;
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: ${grey};
  border: 1px solid ${lightGrey};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

export const Border = styled.div`
  width: 100%;
  border-top: 1px solid ${lightGrey};
  padding-top: 10px;
  padding-bottom: 10px;
`;
