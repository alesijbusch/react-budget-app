import React, { useState } from "react";
import { BudgetApp, BudgetGroup, StyledBadget } from "./styles";
import { BadgetCard, CustomSelect, RemainingCard, SpentCard, Title, Option } from "components";
import { useCurencyContext } from "contex/CurrencyContext/CurrencyContext";
import { Currency } from "config/currency";
import { SingleValue } from "react-select";

// const options: Option[] = [
//   { value: Currency.USD, label: "USD" },
//   { value: Currency.EUR, label: "EUR" },
//   { value: Currency.GBR, label: "GBR" },
// ];

export const Badget = () => {
  //const [tips, setTips] = useState<Option>(options[0]);
  const { options, curency, addCurency } = useCurencyContext();
  const handleTips = (event: SingleValue<Option>) => {
    if (event) {
      addCurency(event);
    }
  };
  return (
    <BudgetGroup>
      <BudgetApp>
        <Title name="Budget App" />
        <CustomSelect options={options} setTips={handleTips} defaultValue={curency[0]} />
      </BudgetApp>
      <StyledBadget>
        <BadgetCard />
        <RemainingCard />
        <SpentCard />
      </StyledBadget>
    </BudgetGroup>
  );
};
