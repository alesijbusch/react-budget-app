import React from "react";
import { StyledRemainingCard, StyledRemainingCardText } from "./styles";
import { useExpensesContext } from "contex/ExpensesContext/ExpensesContext";
import { useCurencyContext } from "contex/CurrencyContext/CurrencyContext";
import { useBadgetContext } from "contex/BudgetContext/BudgetContext";

export const RemainingCard = () => {
  const { expenses } = useExpensesContext();
  const { badget } = useBadgetContext();
  const { curency } = useCurencyContext();

  const getCurency = curency.map(({ value }) => value);
  const getExpensesValue = expenses.map(({ cost }) => cost);
  const getexpenses = getExpensesValue.reduce((total, cost) => total + +cost, 0);

  console.log(getCurency);
  console.log(getExpensesValue);
  console.log(getexpenses);

  // const setRemaining = () => {
  //   if (String(getCurency)) {
  //     return badget - getexpenses;
  //   }
  // };
  const setRemaining = String(getCurency) && badget - getexpenses;

  return (
    <StyledRemainingCard>
      <StyledRemainingCardText>
        Remaining: {getCurency}
        {setRemaining}
      </StyledRemainingCardText>
    </StyledRemainingCard>
  );
};
