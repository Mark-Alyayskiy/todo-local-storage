import styled from "styled-components";
import { darkWhite, grey } from "../styled";

type Props = {
  darkTheme: boolean;
};

export const Wrapper = styled.div<Props>`
  width: 100%;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: auto;
  background-color: ${(props) => (props.darkTheme ? grey : darkWhite)};
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  max-width: 800px;
  gap: 20px;
`;
