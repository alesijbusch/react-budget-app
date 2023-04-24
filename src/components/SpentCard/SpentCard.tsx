import React from "react";
import { StyledSpentCard } from "./styles";
import { useCurrencyContext, useExpensesContext } from "context";

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();

  const spent = expenses.reduce((spent, expense) => spent + +expense.cost, 0);

  return (
    <StyledSpentCard>
      Spent so far: {currency.value}
      {spent}
    </StyledSpentCard>
  );
};
