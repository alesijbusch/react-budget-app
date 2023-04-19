import React, { createContext, useContext, useState } from "react";
import { BudgetContextState, ChildrenContextProvider } from "types";

const BadgetContext = createContext<BudgetContextState>({} as BudgetContextState);

const useBadgetValue = () => {
  const [badgetValue, setBadgetValue] = useState<BudgetContextState>(() => {
    return {
      badget: 0,
      setBadget: (badget: number) => {
        setBadgetValue((context) => ({
          ...context,
          badget: +badget,
        }));
      },
    };
  });

  return badgetValue;
};

export const useBadgetContext = () => useContext(BadgetContext);

export const BadgetContextProvider = ({ children }: ChildrenContextProvider) => {
  return <BadgetContext.Provider value={useBadgetValue()}>{children}</BadgetContext.Provider>;
};
