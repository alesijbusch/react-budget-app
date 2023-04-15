import React from "react";
import { StyledSpentCard, StyledSpentCardInput } from "./styles";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";
import { useCurencyContext } from "contex/CurrencyContext/CurrencyContext";

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const { curency } = useCurencyContext();

  const getCurency = curency.map(({ value }) => value);
  const getExpensesValue = expenses.map(({ cost }) => cost);
  const getexpenses = getExpensesValue.reduce((total, cost) => total + +cost, 0);

  console.log(getCurency);
  console.log(getExpensesValue);
  console.log(getexpenses);

  const setSpent = () => {
    if (String(getCurency)) {
      return getexpenses;
    }
  };

  return (
    <StyledSpentCard>
      <StyledSpentCardInput>
        Spent so far: {getCurency}
        {setSpent()}
      </StyledSpentCardInput>
    </StyledSpentCard>
  );
};
