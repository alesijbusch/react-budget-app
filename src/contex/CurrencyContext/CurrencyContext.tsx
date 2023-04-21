import React, { createContext, useContext, useState } from "react";
import { Currency } from "config";
import { ChildrenContextProvider, CurencyContextState, CurrencyOption } from "types";

const curencies: CurrencyOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

const CurencyContext = createContext<CurencyContextState>({} as CurencyContextState);

const useCurencyValue = () => {
  const [curencyValue, setCurencyValue] = useState<CurencyContextState>(() => {
    return {
      curency: curencies[0],
      curencies: curencies,
      setCurency: (curency: CurrencyOption) => {
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

export const CurencyContextProvider = ({ children }: ChildrenContextProvider) => {
  return <CurencyContext.Provider value={useCurencyValue()}>{children}</CurencyContext.Provider>;
};
