import React, { createContext, useContext, useState } from "react";
import { BudgetContextState, ChildrenContextProvider } from "types";

const BudgetContext = createContext<BudgetContextState>({} as BudgetContextState);

const useBudgetValue = () => {
  const [budgetValue, setBudgetValue] = useState<BudgetContextState>(() => {
    return {
      budget: 0,
      setBudget: (budget: number) => {
        setBudgetValue((context) => ({
          ...context,
          budget: +budget,
        }));
      },
    };
  });

  return budgetValue;
};

export const useBudgetContext = () => useContext(BudgetContext);

export const BadgetContextProvider = ({ children }: ChildrenContextProvider) => {
  return <BudgetContext.Provider value={useBudgetValue()}>{children}</BudgetContext.Provider>;
};
