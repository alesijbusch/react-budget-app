import React, { ChangeEvent } from "react";
import { InputGroup, StyledButton, StyledError, StyledForm } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Input, Title } from "components";
import { useBadgetContext, useExpensesContext } from "contex";
import { Expense } from "types/types";
import { getValidateRule } from "getValidateRule";

export const Form = () => {
  const { addExpense } = useExpensesContext();
  const { badget } = useBadgetContext();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Expense>({});

  const onSubmit: SubmitHandler<Expense> = (data) => {
    if (badget > 0) {
      addExpense({ ...data, id: uuidv4() });
    } else {
      alert("Enter budget");
    }

    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title name="Add Expense" />
      <InputGroup>
        <Controller
          control={control}
          rules={getValidateRule("text")}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
              placeholder="enter name ..."
              type="text"
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name?.message && <StyledError>{errors.name.message}</StyledError>}

        <Controller
          control={control}
          rules={getValidateRule("number")}
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              placeholder="enter cost ..."
              type="text"
            />
          )}
          name="cost"
          defaultValue=""
        />
        {errors.cost?.message && <StyledError>{errors.cost.message}</StyledError>}
      </InputGroup>
      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  );
};
