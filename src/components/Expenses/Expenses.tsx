import React, { ChangeEvent, useState } from "react";
import { ExpensesGroup } from "./styles";
import { ExpensesList, Input, Title } from "components";
import { useDebounce } from "hooks/useDebounce";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const [search, setSearch] = useState("");
  const debaunceSearch = useDebounce(search);

  const handelInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filtredExpenses = expenses.filter((expense) => {
    return expense.name.toLowerCase().includes(debaunceSearch.toLowerCase());
  });

  return (
    <ExpensesGroup>
      <Title name="Expenses" />
      <Input value={search} onChange={handelInput} type="search" placeholder="search ..." />
      <ExpensesList filtredExpenses={filtredExpenses} />
    </ExpensesGroup>
  );
};
