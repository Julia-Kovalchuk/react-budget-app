import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 15px 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;

  font-size: 16px;
  flood-color: ${Color.Gray_dark};
`;
