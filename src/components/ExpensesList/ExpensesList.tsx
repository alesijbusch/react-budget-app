import { StyledExpensesList } from "./styles";
import { ExpensesItem } from "components";
import { useBadgetContext } from "contex/BudgetContext/BudgetContext";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  const { badget } = useBadgetContext();
  return (
    <StyledExpensesList>
      {expenses.map((expense) => {
        return <ExpensesItem expense={expense} key={expense.id} />;
      })}
    </StyledExpensesList>
  );
};
