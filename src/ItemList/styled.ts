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
  /* min-width: 400px; */
  /* max-width: 400px; */
  background-color: ${(props) => (props.darkTheme ? grey : darkWhite)};
`;

export const Header = styled.div`
  background-color: ${lightGrey};
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 5px;
  width: calc(100% - 10px);
`;

export const ScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 350px;

  &::-webkit-scrollbar-track {
    background-color: red; /* Цвет фона скроллбара */
  }
`;

export const Text = styled.div`
  font-size: ${small};
`;
