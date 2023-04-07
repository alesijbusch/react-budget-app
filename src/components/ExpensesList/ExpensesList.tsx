import React from "react";
import { StyledExpensesList } from "./styles";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";

export const ExpensesList = () => {
  return (
    <StyledExpensesList>
      <ExpensesItem />
    </StyledExpensesList>
  );
};
