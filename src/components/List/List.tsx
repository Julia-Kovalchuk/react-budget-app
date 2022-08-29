import React from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../types";
import { ListItem } from "../ListItem/ListItem";
import { Phrase, StyledList } from "./styles";

interface IProps {
  currentExpenses: IExpense[];
}

export const List = ({ currentExpenses }: IProps) => {
  const { expenses } = useExpensesContext();
  let isStart: boolean = true;

  expenses.length !== 0 ? (isStart = false) : (isStart = true);

  let isSearching: boolean = false;
  currentExpenses.length === 0 ? (isSearching = true) : (isSearching = false);

  if (isStart) {
    return <StyledList $isSearching={isSearching}> </StyledList>;
  } else if (currentExpenses.length === 0) {
    return (
      <StyledList $isSearching={isSearching}>
        <Phrase>Oooops 🙈</Phrase>
      </StyledList>
    );
  } else {
    return (
      <StyledList $isSearching={isSearching}>
        {currentExpenses.map((currentExpenses: IExpense) => {
          return (
            <ListItem expense={currentExpenses} key={currentExpenses.id} />
          );
        })}
      </StyledList>
    );
  }
};
