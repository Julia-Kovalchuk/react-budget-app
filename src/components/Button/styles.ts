import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledButton = styled.button`
  padding: 15px 0px;
  width: 100%;
  background: ${Color.Primary};
  color: ${Color.White};
  font-size: 16px;
  border: none;
  margin-top: 10px;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 10px gray;
  }
`;
