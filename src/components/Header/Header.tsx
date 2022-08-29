import React from "react";
import { useBudgetContext } from "../../context/BudgetContex/BudgetContex";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Budget } from "../Budget/Budget";
import { CustomSelect } from "../CustonSelect/CustomSelect";
import { Remaining } from "../Remaining/Remaining";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { HeaderTitleBox, StyledHeader } from "./styles";

export const Header = () => {
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const amountExpenses: number = expenses.reduce((amount, expense) => {
    return amount + +expense.cost;
  }, 0);

  const remainingValue: number = +budget - amountExpenses;

  let isOverspending = false;

  if (remainingValue < 0) {
    isOverspending = true;
  }

  return (
    <StyledHeader>
      <HeaderTitleBox>
        <Title name="Budget App" />
        <CustomSelect />
      </HeaderTitleBox>
      <Budget />
      <Remaining
        remainingValue={remainingValue}
        isOverspending={isOverspending}
      />
      <Spent amountExpenses={amountExpenses} />
    </StyledHeader>
  );
};
