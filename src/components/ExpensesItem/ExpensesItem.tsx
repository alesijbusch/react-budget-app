import React from "react";
import { StyledExpensesClose, StyledExpensesItem, StyledExpensesTitle } from "./styles";
import { ExpensesBadget } from "components";
import { ReactComponent as CloseImg } from "../../assets/icons/close.svg";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";
import { useCurencyContext } from "contex/CurrencyContext/CurrencyContext";
import { Expense } from "types";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpensesItem = ({ expense: { name, cost, id } }: ExpenseItemProps) => {
  const { curency } = useCurencyContext();
  const { deleteExpense } = useExpensesContext();
  const getCurency = curency.map(({ value }) => value);
  return (
    <StyledExpensesItem>
      <StyledExpensesTitle>{name}</StyledExpensesTitle>
      <ExpensesBadget curency={getCurency} sum={cost}></ExpensesBadget>
      <StyledExpensesClose onClick={() => deleteExpense(id)}>
        <CloseImg />
      </StyledExpensesClose>
    </StyledExpensesItem>
  );
};
