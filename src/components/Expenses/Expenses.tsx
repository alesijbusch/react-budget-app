import React from "react";
import { ExpensesGroup } from "./styles";
import { ExpensesList, Title } from "components";

export const Expenses = () => {
  return (
    <ExpensesGroup>
      <Title name="Expenses" />
      {/* <Input type="search" placeholder="search ..." /> */}
      <ExpensesList />
    </ExpensesGroup>
  );
};
