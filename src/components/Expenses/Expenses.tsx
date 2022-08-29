import React, { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { IExpense } from "../../types";
import { Input } from "../Input/Input";
import { List } from "../List/List";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const debounceValue = useDebounce(search.value);
  const { expenses } = useExpensesContext();
  const [expensesValues, setExpensesValues] = useState<IExpense[]>(expenses);

  useEffect(() => {
    debounceValue
      ? setExpensesValues(
          expenses.filter((expense) =>
            expense.name
              .toLocaleLowerCase()
              .includes(debounceValue.toLocaleLowerCase())
          )
        )
      : setExpensesValues(expenses);
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title name="Expenses" />
      <Input placeholder="search ..." {...search} />
      <List currentExpenses={expensesValues} />
    </StyledExpenses>
  );
};
