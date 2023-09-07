import styled from "styled-components";
import { grey, lightGrey, darkWhite } from "../styled";

type Props = {
  darkTheme: boolean;
};

export const Label = styled.div`
  width: 100px;
  position: absolute;
  font-size: 12px;
  top: -10px;
  left: -10px;
`;

export const Wrapper = styled.div<Props>`
  position: relative;
  background-color: ${(props) => (props.darkTheme ? grey : darkWhite)};
  border: 1px solid ${lightGrey};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
`;

export const Border = styled.div`
  width: 100%;
  border-top: 1px solid ${lightGrey};
  margin-top: 10px;
  padding-bottom: 10px;
`;
