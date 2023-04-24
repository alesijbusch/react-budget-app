import React from "react";
import {
  StyledBudgetCard,
  StyledBudgetCardInput,
  StyledBudgetCardButton,
  StyledBudgetCardForm,
  StyledBudgetCardText,
  StyledBudgetCardError,
} from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useBudgetContext, useCurrencyContext } from "context";
import { useToggle } from "hooks";
import { getValidateRule } from "utils";

interface BudgetCardProps {
  budget: number;
}

export const BudgetCard = () => {
  const { currency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isEditMode, toggleEditMode] = useToggle(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<BudgetCardProps>();

  const onSubmit: SubmitHandler<BudgetCardProps> = (data) => {
    setBudget(data.budget);
    reset();
    toggleEditMode();
  };

  return (
    <>
      {isEditMode ? (
        <StyledBudgetCard>
          <StyledBudgetCardText>
            Budget: {currency.value}
            {budget}
          </StyledBudgetCardText>
          <StyledBudgetCardButton type="button" onClick={toggleEditMode}>
            Edit
          </StyledBudgetCardButton>
        </StyledBudgetCard>
      ) : (
        <StyledBudgetCardForm onSubmit={handleSubmit(onSubmit)}>
          <StyledBudgetCard>
            <StyledBudgetCardInput
              {...register("budget", getValidateRule("budget"))}
              type="text"
              placeholder="Enter  budget ..."
            />
            <StyledBudgetCardButton>Save</StyledBudgetCardButton>
            {errors.budget?.message && (
              <StyledBudgetCardError>{errors.budget.message}</StyledBudgetCardError>
            )}
          </StyledBudgetCard>
        </StyledBudgetCardForm>
      )}
    </>
  );
};
