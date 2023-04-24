import React from "react";
import { BudgetApp, BudgetGroup, StyledBudget } from "./styles";
import { BudgetCard, CustomSelect, RemainingCard, SpentCard, Title } from "components";

export const Budget = () => {
  return (
    <BudgetGroup>
      <BudgetApp>
        <Title name="Budget App" />
        <CustomSelect />
      </BudgetApp>
      <StyledBudget>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </StyledBudget>
    </BudgetGroup>
  );
};
