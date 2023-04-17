import React, { useEffect, useState } from "react";
import { BudgetApp, BudgetGroup, StyledBadget } from "./styles";
import { BadgetCard, CustomSelect, RemainingCard, SpentCard, Title } from "components";
import { SingleValue } from "react-select";
import { useBadgetContext, useCurencyContext, useExpensesContext } from "contex";
import { Option } from "types";

export const Badget = () => {
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const { expenses } = useExpensesContext();
  const { badget } = useBadgetContext();
  const { options, curency, addCurency } = useCurencyContext();

  const getExpenses = expenses.reduce((spent, expense) => spent + +expense.cost, 0);

  useEffect(() => {
    setSpent(getExpenses);
  }, [expenses]);

  useEffect(() => {
    setRemaining(badget - getExpenses);
  }, [badget, expenses]);

  const handleTips = (event: SingleValue<Option>) => {
    if (event) {
      addCurency(event);
    }
  };

  return (
    <BudgetGroup>
      <BudgetApp>
        <Title name="Budget App" />
        <CustomSelect options={options} setTips={handleTips} defaultValue={curency} />
      </BudgetApp>
      <StyledBadget>
        <BadgetCard />
        <RemainingCard curency={curency.value} setRemaining={remaining} />
        <SpentCard curency={curency.value} setSpent={spent} />
      </StyledBadget>
    </BudgetGroup>
  );
};
