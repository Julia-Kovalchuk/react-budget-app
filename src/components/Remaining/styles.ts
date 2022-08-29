import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledRemaining = styled.div<{ $overspending: boolean }>`
  padding: 36px 20px 40px;
  background: ${({ $overspending }) =>
    $overspending ? Color.Danger : Color.Gray};
  border-radius: 10px;
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 20px;
`;

export { StyledRemaining };
