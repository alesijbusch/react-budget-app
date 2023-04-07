import React from "react";
import { StyledBadget } from "./styles";
import { BadgetCard } from "../BadgetCard/BadgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";

export const Badget = () => {
  return (
    <StyledBadget>
      <BadgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBadget>
  );
};
