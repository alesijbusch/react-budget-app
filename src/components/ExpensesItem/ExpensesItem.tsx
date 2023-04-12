import React from "react";
import { StyledExpensesItem, StyledExpensesTitle } from "./styles";
import { ExpensesBadget, ExpensesClose, FormValue } from "components";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";

interface ExpenseItemProps {
  expense: FormValue;
}

export const ExpensesItem = ({ expense: {name, cost, id} }: ExpenseItemProps) => {
  const { deleteExpense } = useExpensesContext();
  return (
    <>
      <StyledExpensesItem>
        <StyledExpensesTitle>{name}</StyledExpensesTitle>
        <ExpensesBadget sum={cost} />
        <ExpensesClose onClick={() => deleteExpense(id)} />
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
