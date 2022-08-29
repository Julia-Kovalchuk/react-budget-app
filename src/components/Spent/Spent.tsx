import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { StyledSpent } from "./styles";

interface IProps {
  amountExpenses: number;
}

export const Spent = ({ amountExpenses }: IProps) => {
  const { currency } = useCurrencyContext();

  return <StyledSpent>Spent so far: {currency + amountExpenses}</StyledSpent>;
};
