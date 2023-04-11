import React from "react";
import { StyledExpensesItem, StyledExpensesTitle } from "./styles";
import { ExpensesBadget, ExpensesClose, FormValue } from "components";

interface ExpenseItemProps {
  expense: FormValue;
}

export const ExpensesItem = ({ expense }: ExpenseItemProps) => {
  return (
    <>
      <StyledExpensesItem>
        <StyledExpensesTitle>{expense.name}</StyledExpensesTitle>
        <ExpensesBadget sum={expense.cost} />
        <ExpensesClose />
      </StyledExpensesItem>
      {/* <StyledExpensesItem>
        <StyledExpensesTitle>shoping</StyledExpensesTitle>
        <ExpensesBadget sum="$100" />
        <ExpensesClose />
      </StyledExpensesItem>
      <StyledExpensesItem>
        <StyledExpensesTitle>shoping</StyledExpensesTitle>
        <ExpensesBadget sum="$100" />
        <ExpensesClose />
      </StyledExpensesItem> */}
    </>
  );
};
