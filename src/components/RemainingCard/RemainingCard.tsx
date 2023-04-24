import React from "react";
import { StyledRemainingCardText, StyledOverspendingText } from "./styles";
import { useBudgetContext, useCurrencyContext, useExpensesContext } from "context";

export const RemainingCard = () => {
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();

  const remaining = budget - expenses.reduce((spent, expense) => spent + +expense.cost, 0);

  return (
    <>
      {remaining >= 0 ? (
        <StyledRemainingCardText>
          Remaining: {currency.value}
          {remaining}
        </StyledRemainingCardText>
      ) : (
        <StyledOverspendingText>
          Overspending by {currency.value}
          {Math.abs(remaining)}
        </StyledOverspendingText>
      )}
    </>
  );
};
