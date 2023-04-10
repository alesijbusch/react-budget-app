import React, { useState } from "react";
import { BudgetApp, BudgetGroup, StyledBadget } from "./styles";
import { BadgetCard, CustomSelect, RemainingCard, SpentCard, Title, Option } from "components";

const options: Option[] = [
  { value: 2.99, label: "USD" },
  { value: 3.27, label: "EUR" },
  { value: 3.7, label: "GBR" },
];

export const Badget = () => {
  const [tips, setTips] = useState<Option>(options[0]);
  return (
    <BudgetGroup>
      <BudgetApp>
        <Title name="Budget App" />
        <CustomSelect options={options} setTips={setTips} defaultValue={options[0]} />
      </BudgetApp>
      <StyledBadget>
        <BadgetCard />
        <RemainingCard />
        <SpentCard />
      </StyledBadget>
    </BudgetGroup>
  );
};
