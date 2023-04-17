import React from "react";
import { StyledExpensesClose, StyledExpensesItem, StyledExpensesTitle } from "./styles";
import { ExpensesBadget } from "components";
import { ReactComponent as CloseImg } from "../../assets/icons/close.svg";
import { useCurencyContext, useExpensesContext } from "contex";
import { Expense } from "types";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpensesItem = ({ expense: { name, cost, id } }: ExpenseItemProps) => {
  const { curency } = useCurencyContext();
  const { deleteExpense } = useExpensesContext();

  return (
    <StyledExpensesItem>
      <StyledExpensesTitle>{name}</StyledExpensesTitle>
      <ExpensesBadget curency={curency.value} sum={cost}></ExpensesBadget>
      <StyledExpensesClose onClick={() => deleteExpense(id)}>
        <CloseImg />
      </StyledExpensesClose>
    </StyledExpensesItem>
  );
};