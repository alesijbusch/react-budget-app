import React, { ReactNode, createContext, useContext, useState } from "react";

import { Option } from "components";
import { Currency } from "config/currency";

interface CurencyContextState {
  curency: Option;
  options: Option[];
  addCurency: (curency: Option) => void;
}

interface CurencyContextProviderProps {
  children: ReactNode;
}

const options: Option[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

const CurencyContext = createContext<CurencyContextState>({} as CurencyContextState);

const useCurencyValue = () => {
  const [curencyValue, setCurencyValue] = useState<CurencyContextState>(() => {
    return {
      curency: options[0],
      options: options,
      addCurency: (curency: Option) => {
        setCurencyValue((context) => ({
          ...context,
          curency: curency,
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
