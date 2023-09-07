import styled from "styled-components";
import { grey, lightGrey, small, darkWhite } from "../styled";

type Props = {
  darkTheme: boolean;
};

export const ListWrapper = styled.div<Props>`
  width: 100%;
  border: 1px solid ${lightGrey};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${(props) => (props.darkTheme ? grey : darkWhite)};
`;

export const Header = styled.div`
  background-color: ${lightGrey};
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 5px 8px 5px 5px;
  box-sizing: border-box;
`;

export const ScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 350px;
`;

export const Text = styled.div`
  font-size: ${small};
`;
