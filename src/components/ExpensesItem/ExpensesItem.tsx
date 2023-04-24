import React from "react";
import { StyledExpensesClose, StyledExpensesItem, StyledExpensesTitle } from "./styles";
import { ExpensesBadget } from "components";
import { useCurrencyContext, useExpensesContext } from "context";
import { Expense } from "types";
import { CloseImg } from "assets";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpensesItem = ({ expense: { name, cost, id } }: ExpenseItemProps) => {
  const { currency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();

  return (
    <StyledExpensesItem>
      <StyledExpensesTitle>{name}</StyledExpensesTitle>
      <ExpensesBadget currency={currency.value} sum={cost}></ExpensesBadget>
      <StyledExpensesClose onClick={() => deleteExpense(id)}>
        <CloseImg />
      </StyledExpensesClose>
    </StyledExpensesItem>
  );
};
