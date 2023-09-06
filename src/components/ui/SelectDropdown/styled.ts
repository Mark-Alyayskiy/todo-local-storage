import styled from "styled-components";
import { grey, white, small, lightGrey } from "../../../styled";

type Props = {
  isOpen: boolean;
};

export const Main = styled.div`
  font-family: sans-serif;
  background: ${grey};
  height: auto;
  border: 1px solid ${lightGrey};
  border-radius: 5px;
`;

export const DropDownContainer = styled.div`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  position: relative;
  width: 10.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled.div<Props>`
  padding: 5px;
  border-radius: 5px;
  font-weight: 500;
  font-size: ${small};
  color: ${white};
  background-color: ${grey};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  border-bottom: ${(props) => props.isOpen && `1px solid #424242`};
  padding-bottom: 7px;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: ${grey};
  box-sizing: border-box;
  color: ${white};
  font-size: ${small};
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  position: absolute;
  background-color: ${lightGrey};
  border: none;
  height: 30px;
  width: 30px;
  top: 0;
  right: -30px;
  z-index: 1;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;
