import React from "react";
import { StyledRemainingCard, StyledOverspending } from "./styles";
import { useBudgetContext, useCurrencyContext, useExpensesContext } from "context";

export const RemainingCard = () => {
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();

  const remaining = budget - expenses.reduce((spent, expense) => spent + +expense.cost, 0);

  return (
    <>
      {remaining >= 0 ? (
        <StyledRemainingCard>
          Remaining: {currency.value}
          {remaining}
        </StyledRemainingCard>
      ) : (
        <StyledOverspending>
          Overspending by {currency.value}
          {Math.abs(remaining)}
        </StyledOverspending>
      )}
    </>
  );
};
