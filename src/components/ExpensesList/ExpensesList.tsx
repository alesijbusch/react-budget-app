import { StyledExpensesList } from "./styles";
import { ExpensesItem } from "components";
import { Expense } from "types";

interface ExpensesListProps {
  filtredExpenses: Expense[];
}

export const ExpensesList = ({ filtredExpenses }: ExpensesListProps) => {
  return (
    <StyledExpensesList>
      {filtredExpenses.map((expense) => {
        return <ExpensesItem expense={expense} key={expense.id} />;
      })}
    </StyledExpensesList>
  );
};
