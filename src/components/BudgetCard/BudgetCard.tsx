import React from "react";
import {
  StyledBudgetCard,
  BudgetCardInput,
  BudgetCardButton,
  BudgetCardForm,
  BudgetCardText,
  BudgetCardError,
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

  const onSubmit: SubmitHandler<BudgetCardProps> = ({ budget }) => {
    setBudget(budget);
    reset();
    toggleEditMode();
  };

  return (
    <>
      {isEditMode ? (
        <StyledBudgetCard>
          <BudgetCardText>
            Budget: {currency.value}
            {budget}
          </BudgetCardText>
          <BudgetCardButton type="button" onClick={toggleEditMode}>
            Edit
          </BudgetCardButton>
        </StyledBudgetCard>
      ) : (
        <BudgetCardForm onSubmit={handleSubmit(onSubmit)}>
          <BudgetCardInput
            {...register("budget", getValidateRule("budget"))}
            type="text"
            placeholder="Enter  budget ..."
          />
          <BudgetCardButton>Save</BudgetCardButton>
          {errors.budget?.message && <BudgetCardError>{errors.budget.message}</BudgetCardError>}
        </BudgetCardForm>
      )}
    </>
  );
};
