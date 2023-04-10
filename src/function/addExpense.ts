import { FormValue } from "components";
import { v4 as uuidv4 } from "uuid";

export const addExpense = (data: FormValue) => {
  return {
    ...data,
    id: uuidv4(),
  };
};
