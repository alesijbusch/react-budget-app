import React from "react";
import { StyledExpensesItem, StyledExpensesTitle } from "./styles";
import { ExpensesBadget, ExpensesClose } from "components";

export const ExpensesItem = () => {
  return (
    <>
      <StyledExpensesItem>
        <StyledExpensesTitle>shoping</StyledExpensesTitle>
        <ExpensesBadget sum="$100" />
        <ExpensesClose />
      </StyledExpensesItem>
      <StyledExpensesItem>
        <StyledExpensesTitle>shoping</StyledExpensesTitle>
        <ExpensesBadget sum="$100" />
        <ExpensesClose />
      </StyledExpensesItem>
      <StyledExpensesItem>
        <StyledExpensesTitle>shoping</StyledExpensesTitle>
        <ExpensesBadget sum="$100" />
        <ExpensesClose />
      </StyledExpensesItem>
    </>
  );
};
