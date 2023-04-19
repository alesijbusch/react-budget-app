import { Currency } from "config/currency";
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

interface CurencyContextState {
  curency: CurrencyOption;
  curencies: CurrencyOption[];
  setCurency: (curency: CurrencyOption) => void;
}

interface ExpensesContextState {
  expenses: Expense[];
  deleteExpense: (expense: string) => void;
  addExpense: (expense: Expense) => void;
}

interface BudgetContextState {
  badget: number;
  addBadget: (badget: number) => void;
}

export type {
  CurrencyOption,
  Expense,
  ChildrenContextProvider,
  CurencyContextState,
  ExpensesContextState,
  BudgetContextState,
};
