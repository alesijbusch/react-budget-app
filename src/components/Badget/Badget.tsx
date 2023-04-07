import React, { useState } from "react";
import { BudgetApp, BudgetGroup, StyledBadget } from "./styles";
import { BadgetCard } from "../BadgetCard/BadgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";
import { CustomSelect } from "../Select/Select";
import { Option } from "../../types";

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
