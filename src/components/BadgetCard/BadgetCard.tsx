import React, { useState } from "react";
import {
  StyledBadgetCard,
  StyledBadgetCardInput,
  StyledBadgetCardButton,
  StyledBadgetCardForm,
  StyledBadgetCardText,
} from "./styles";
import { useToggle } from "hooks/useToggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { getValidateRule } from "function/getValidateRule";
import { BadgetCardProps } from "types";
import { useBadgetContext } from "contex/BudgetContext/BudgetContext";

export const BadgetCard = () => {
  const { badget, addBadget } = useBadgetContext();
  const [isEditMode, toggleEditMode] = useToggle(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<BadgetCardProps>();

  const onSubmit: SubmitHandler<BadgetCardProps> = (data) => {
    console.log(+data.budget);
    addBadget(+data.budget);
    reset();
    toggleEditMode();
  };

  return (
    <>
      {isEditMode ? (
        <StyledBadgetCard>
          <StyledBadgetCardText>Badget: {badget}</StyledBadgetCardText>
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
            {errors.budget?.message && <p>{errors.budget.message}</p>}

            <StyledBadgetCardButton>Edit</StyledBadgetCardButton>
          </StyledBadgetCard>
        </StyledBadgetCardForm>
      )}
    </>
  );
};
