import React, { ReactNode, createContext, useContext, useState } from "react";
import { Currency } from "types";

interface CurencyContextState {
  curency: Currency[];
  addCurency: (curency: Currency) => void;
}

interface CurencyContextProviderProps {
  children: ReactNode;
}

const CurencyContext = createContext<CurencyContextState>({} as CurencyContextState);

const useCurencyValue = () => {
  const [curencyValue, setCurencyValue] = useState<CurencyContextState>(() => {
    return {
      curency: [],
      addCurency: (curency: Currency) => {
        setCurencyValue((context) => ({
          ...context,
          curency: [curency],
        }));
      },
    };
  });

  return curencyValue;
};

export const useCurencyContext = () => useContext(CurencyContext);

export const CurencyContextProvider = ({ children }: CurencyContextProviderProps) => {
  return <CurencyContext.Provider value={useCurencyValue()}>{children}</CurencyContext.Provider>;
};
