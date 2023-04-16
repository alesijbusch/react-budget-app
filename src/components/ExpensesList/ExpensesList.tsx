import { StyledExpensesList } from "./styles";
import { ExpensesItem, Input } from "components";
import { useBadgetContext } from "contex/BudgetContext/BudgetContext";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";
import { useDebounce } from "hooks/useDebounce";
import { ChangeEvent, useState } from "react";
import { Expense } from "types";

interface ExpensesListProps {
  filtredExpenses: Expense[];
}

export const ExpensesList = ({ filtredExpenses }: ExpensesListProps) => {
  return (
    <StyledExpensesList>
      {filtredExpenses.map((expense) => {
        return <ExpensesItem expense={expense} key={expense.id} />;
      })}
    </StyledExpensesList>
  );
};
