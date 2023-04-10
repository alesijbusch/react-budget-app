import React from "react";
import { StyledExpensesList } from "./styles";
import { ExpensesItem } from "components";

export const ExpensesList = () => {
  return (
    <StyledExpensesList>
      <ExpensesItem />
    </StyledExpensesList>
  );
};
