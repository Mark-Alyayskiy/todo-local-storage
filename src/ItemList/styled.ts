import styled from "styled-components";
import { lightGrey, small } from "../styled";

export const ListWrapper = styled.div`
  width: 100%;
  border: 1px solid ${lightGrey};
  border-radius: 5px;
  padding: 10px;
  min-width: 400px;
`;

export const Header = styled.div`
  background-color: ${lightGrey};
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 5px;
  width: calc(100% - 10px);
`;

export const Text = styled.div`
  font-size: ${small};
`;
