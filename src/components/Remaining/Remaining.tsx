import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { StyledRemaining } from "./styles";

interface IProps {
  remainingValue: number;
  isOverspending: boolean;
}

export const Remaining = ({ remainingValue, isOverspending }: IProps) => {
  const { currency } = useCurrencyContext();

  if (isOverspending) {
    return (
      <StyledRemaining $overspending={isOverspending}>
        Overspending: {currency + -remainingValue}
      </StyledRemaining>
    );
  } else {
    return (
      <StyledRemaining $overspending={isOverspending}>
        Remaining: {currency + remainingValue}
      </StyledRemaining>
    );
  }
};
