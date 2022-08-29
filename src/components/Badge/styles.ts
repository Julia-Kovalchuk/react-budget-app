import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledBadge = styled.span`
  text-align: center;
  margin-left: auto;
  margin-right: 20px;
  padding: 5px 0px;
  min-width: 56px;
  background-color: ${Color.Primary};
  border-radius: 10px;

  color: ${Color.White};
  font-size: 15px;
`;
