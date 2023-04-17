import React, { ChangeEvent, useEffect, useState } from "react";
import { ExpensesGroup, ExpensesNotFound } from "./styles";
import { ExpensesList, Input, Title } from "components";
import { useExpensesContext } from "contex";
import { useDebounce } from "hooks";

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const [search, setSearch] = useState("");
  const debaunceSearch = useDebounce(search);
  // const [noResult, setNoresult] = useState(true);

  const handelSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filtredExpenses = expenses.filter((expense) => {
    return expense.name.toLowerCase().includes(debaunceSearch.toLowerCase());
  });

  // const filtredExpenses = expenses.filter((expense) => {
  //   return expense.name.toLowerCase().includes(debaunceSearch.toLowerCase());
  // });

  // useEffect(() => {
  //   if (filtredExpenses.length !== 0) {
  //     setNoresult(false);
  //   }
  // }, [filtredExpenses]);
  return (
    <ExpensesGroup>
      <Title name="Expenses" />
      <Input value={search} onChange={handelSearch} type="search" placeholder="search ..." />
      {/* {noResult ? (
        <ExpensesNotFound>Oooops 🙈</ExpensesNotFound>
      ) : (
        <ExpensesList filtredExpenses={filtredExpenses} />
      )} */}
      <ExpensesList filtredExpenses={filtredExpenses} />
    </ExpensesGroup>
  );
};
