import React, { createContext, useContext, useState } from "react";
import { ChildrenContextProvider, Expense } from "types";
import { ExpensesContextState } from "./types";

const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);

const useExpensesValue = () => {
  const [expensesValue, setExpensesValue] = useState<ExpensesContextState>(() => {
    return {
      expenses: [],
      deleteExpense: (id: string) => {
        setExpensesValue((context) => ({
          ...context,
          expenses: context.expenses.filter((expense) => expense.id !== id),
        }));
      },
      addExpense: (expense: Expense) => {
        setExpensesValue((context) => ({
          ...context,
          expenses: [...context.expenses, expense],
        }));
      },
    };
  });

  return expensesValue;
};

export const useExpensesContext = () => useContext(ExpenseContext);

export const ExpensesContextProvider = ({ children }: ChildrenContextProvider) => {
  return <ExpenseContext.Provider value={useExpensesValue()}>{children}</ExpenseContext.Provider>;
};
