import React, { useEffect, useState } from "react";
import {
  StyledBadgetCard,
  StyledBadgetCardInput,
  StyledBadgetCardButton,
  StyledBadgetCardForm,
  StyledBadgetCardText,
  StyledBadgetCardError,
} from "./styles";
import { useToggle } from "hooks/useToggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { getValidateRule } from "function/getValidateRule";
import { BadgetCardProps } from "types";
import { useBadgetContext } from "contex/BudgetContext/BudgetContext";
import { useCurencyContext } from "contex/CurrencyContext/CurrencyContext";
export const BadgetCard = () => {
  const { curency } = useCurencyContext();
  const { badget, addBadget } = useBadgetContext();
  const [isEditMode, toggleEditMode] = useToggle(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<BadgetCardProps>();

  const onSubmit: SubmitHandler<BadgetCardProps> = (data) => {
    addBadget(data.budget);
    reset();
    toggleEditMode();
  };

  return (
    <>
      {isEditMode ? (
        <StyledBadgetCard>
          <StyledBadgetCardText>
            Badget: {curency.value}
            {badget}
          </StyledBadgetCardText>
          <StyledBadgetCardButton type="button" onClick={toggleEditMode}>
            Save
          </StyledBadgetCardButton>
        </StyledBadgetCard>
      ) : (
        <StyledBadgetCardForm onSubmit={handleSubmit(onSubmit)}>
          <StyledBadgetCard>
            <StyledBadgetCardInput
              {...register("budget", getValidateRule("number"))}
              type="text"
              placeholder="Enter  budget ..."
            />
            <StyledBadgetCardButton>Edit</StyledBadgetCardButton>
            {errors.budget?.message && (
              <StyledBadgetCardError>{errors.budget.message}</StyledBadgetCardError>
            )}
          </StyledBadgetCard>
        </StyledBadgetCardForm>
      )}
    </>
  );
};
