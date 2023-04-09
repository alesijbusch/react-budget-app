import React from "react";
import { ExpensesGroup } from "./styles";
import { Title } from "../Title/Title";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { Input } from "../Input/Input";

export const Expenses = () => {
  return (
    <ExpensesGroup>
      <Title name="Expenses" />
      {/* <Input type="search" placeholder="search ..." /> */}
      <ExpensesList />
    </ExpensesGroup>
  );
};
