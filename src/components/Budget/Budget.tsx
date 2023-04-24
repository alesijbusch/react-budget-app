import React from "react";
import { BudgetHeader, StyledBudget, BudgetBody } from "./styles";
import { BudgetCard, CustomSelect, RemainingCard, SpentCard, Title } from "components";

export const Budget = () => {
  return (
    <StyledBudget>
      <BudgetHeader>
        <Title name="Budget App" />
        <CustomSelect />
      </BudgetHeader>
      <BudgetBody>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </BudgetBody>
    </StyledBudget>
  );
};
