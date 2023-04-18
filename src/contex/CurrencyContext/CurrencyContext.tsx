import React, { ReactNode, createContext, useContext, useState } from "react";
import { CurrencyOption } from "types";
import { Currency } from "config/currency";

interface CurencyContextState {
  curency: CurrencyOption;
  curencies: CurrencyOption[];
  setCurency: (curency: CurrencyOption) => void;
}

interface CurencyContextProviderProps {
  children: ReactNode;
}

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

export const CurencyContextProvider = ({ children }: CurencyContextProviderProps) => {
  return <CurencyContext.Provider value={useCurencyValue()}>{children}</CurencyContext.Provider>;
};
