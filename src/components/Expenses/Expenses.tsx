import React from "react";
import { ExpensesGroup } from "./styles";
import { Title } from "../Title/Title";
import { ExpensesSearch } from "../ExpensesSearch/ExpensesSearch";
import { ExpensesList } from "../ExpensesList/ExpensesList";

export const Expenses = () => {
  return (
    <ExpensesGroup>
      <Title name="Expenses" />
      <ExpensesSearch />
      <ExpensesList />
    </ExpensesGroup>
  );
};
