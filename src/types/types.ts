import { Currency } from "config";
import { ReactNode } from "react";

interface CurrencyOption {
  value: Currency;
  label: keyof typeof Currency;
}

interface Expense {
  id: string;
  name: string;
  cost: string;
}

interface ChildrenContextProvider {
  children: ReactNode;
}

export type { CurrencyOption, Expense, ChildrenContextProvider };
