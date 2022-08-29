import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledBudget = styled.div`
  padding: 32px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Color.Secondary};
  border-radius: 10px;
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 20px;
`;

const Button = styled.button`
  background: ${Color.White};
  font-size: 14px;
  padding: 10px 30px 8px;
  border: none;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 10px ${Color.White};
  }
`;

const Input = styled.input`
  background: ${Color.Secondary};
  width: 50%;
  border: none;
  color: ${Color.Black};
  font-weight: 500;
  font-size: 16px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: ${Color.White};
  }

  &:focus {
    outline: none;
  }
`;

export { StyledBudget, Button, Input };
