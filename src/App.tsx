import React from "react";

import { Badget, Container, Expenses, Form, FormValue } from "components";
import { SubmitHandler } from "react-hook-form";
import { addExpense } from "function/addExpense";

// const onSubmit: SubmitHandler<FormValue> = (data) => {
//   console.log(addExpense(data));
//   //const obj = addExpense(data);
// };

function App() {
  return (
    <Container>
      <Badget />
      <Expenses />
      <Form />
    </Container>
  );
}

export default App;
