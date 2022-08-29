import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 17px 16px 20px;
  border-bottom: 1px solid ${Color.Gray};
  align-items: center;

  font-size: 19px;
`;

const ButtonClose = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export { StyledListItem, ButtonClose };
