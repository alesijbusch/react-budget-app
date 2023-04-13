import { StyledExpensesList } from "./styles";
import { ExpensesItem } from "components";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledExpensesList>
      {expenses.map((expense) => {
        return <ExpensesItem expense={expense} key={expense.id} />;
      })}
    </StyledExpensesList>
  );
};
