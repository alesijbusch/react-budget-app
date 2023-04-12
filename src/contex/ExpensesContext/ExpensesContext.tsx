//import { addExpense } from "function/addExpense";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { Expense } from "types";

interface ExpensesContextState {
  expenses: Expense[];
  deleteExpense: (expense: string) => void;
  addExpense: (expense: Expense) => void;
}

interface ExpensesContextProviderProps {
  children: ReactNode;
}

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

export const ExpensesContextProvider = ({ children }: ExpensesContextProviderProps) => {
  return <ExpenseContext.Provider value={useExpensesValue()}>{children}</ExpenseContext.Provider>;
};
