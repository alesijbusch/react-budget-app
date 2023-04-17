import React, { ReactNode, createContext, useContext, useState } from "react";

interface BudgetContextState {
  badget: number;
  addBadget: (badget: number) => void;
}

interface BadgetContextProviderProps {
  children: ReactNode;
}

const BadgetContext = createContext<BudgetContextState>({} as BudgetContextState);

const useBadgetValue = () => {
  const [badgetValue, setBadgetValue] = useState<BudgetContextState>(() => {
    return {
      badget: 0,
      addBadget: (badget: number) => {
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

export const BadgetContextProvider = ({ children }: BadgetContextProviderProps) => {
  return <BadgetContext.Provider value={useBadgetValue()}>{children}</BadgetContext.Provider>;
};
