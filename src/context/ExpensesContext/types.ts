import { Expense } from "types";

interface ExpensesContextState {
  expenses: Expense[];
  deleteExpense: (expense: string) => void;
  addExpense: (expense: Expense) => void;
}
export type { ExpensesContextState };
