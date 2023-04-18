import React, { useEffect, useState } from "react";
import { BudgetApp, BudgetGroup, StyledBadget } from "./styles";
import { BadgetCard, CustomSelect, RemainingCard, SpentCard, Title } from "components";

export const Badget = () => {
  return (
    <BudgetGroup>
      <BudgetApp>
        <Title name="Budget App" />
        <CustomSelect />
      </BudgetApp>
      <StyledBadget>
        <BadgetCard />
        <RemainingCard />
        <SpentCard />
      </StyledBadget>
    </BudgetGroup>
  );
};
