import React from "react";
import { StyledRemainingCardText, StyledOverspendingText } from "./styles";
import { useBadgetContext, useCurencyContext, useExpensesContext } from "contex";

export const RemainingCard = () => {
  const { badget } = useBadgetContext();
  const { expenses } = useExpensesContext();
  const { curency } = useCurencyContext();

  const remaining = badget - expenses.reduce((spent, expense) => spent + +expense.cost, 0);

  return (
    <>
      {remaining >= 0 ? (
        <StyledRemainingCardText>
          Remaining: {curency.value}
          {remaining}
        </StyledRemainingCardText>
      ) : (
        <StyledOverspendingText>
          Overspending by {curency.value}
          {Math.abs(remaining)}
        </StyledOverspendingText>
      )}
    </>
  );
};
