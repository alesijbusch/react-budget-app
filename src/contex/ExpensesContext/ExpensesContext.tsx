import React, { ReactNode, createContext, useState } from "react";

interface ExpensesContextState {
  expenses: any[];
}

interface ExpensesContextProviderProps {
  children: ReactNode;
}

export const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);

const useExpensesValue = () => {
  const [expensesValue, setExpensesValue] = useState<ExpensesContextState>(() => {
    return {
      expenses: [],
    };
  });

  return expensesValue;
};

export const ExpensesContextProvider = ({ children }: ExpensesContextProviderProps) => {
  return <ExpenseContext.Provider value={useExpensesValue()}>{children}</ExpenseContext.Provider>;
};
