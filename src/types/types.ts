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

interface CurrencyContextState {
  currency: CurrencyOption;
  currencies: CurrencyOption[];
  setCurrency: (curency: CurrencyOption) => void;
}

interface ExpensesContextState {
  expenses: Expense[];
  deleteExpense: (expense: string) => void;
  addExpense: (expense: Expense) => void;
}

interface BudgetContextState {
  budget: number;
  setBudget: (badget: number) => void;
}

type AppContextProvider = React.FunctionComponent<ChildrenContextProvider>;

export type {
  CurrencyOption,
  Expense,
  ChildrenContextProvider,
  CurrencyContextState,
  ExpensesContextState,
  BudgetContextState,
  AppContextProvider,
};
