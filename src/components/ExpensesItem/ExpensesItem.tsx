import React from "react";
import { ExpensesClose, StyledExpensesItem, ExpensesTitle } from "./styles";
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
      <ExpensesTitle>{name}</ExpensesTitle>
      <ExpensesBadget currency={currency.value} sum={cost}></ExpensesBadget>
      <ExpensesClose onClick={() => deleteExpense(id)}>
        <CloseImg />
      </ExpensesClose>
    </StyledExpensesItem>
  );
};
