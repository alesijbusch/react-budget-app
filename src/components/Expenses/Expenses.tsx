import React, { ChangeEvent, useState } from "react";
import { ExpensesGroup, ExpensesNotFound } from "./styles";
import { ExpensesList, Input, Title } from "components";
import { useExpensesContext } from "contex";
import { useDebounce } from "hooks";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const [search, setSearch] = useState("");
  const debaunceSearch = useDebounce(search);

  const handelSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filtredExpenses = expenses.filter((expense) => {
    return expense.name.toLowerCase().includes(debaunceSearch.toLowerCase());
  });

  return (
    <ExpensesGroup>
      <Title name="Expenses" />
      <Input value={search} onChange={handelSearch} type="search" placeholder="search ..." />
      {filtredExpenses.length === 0 ? (
        <ExpensesNotFound>Oooops 🙈</ExpensesNotFound>
      ) : (
        <ExpensesList filtredExpenses={filtredExpenses} />
      )}
    </ExpensesGroup>
  );
};
