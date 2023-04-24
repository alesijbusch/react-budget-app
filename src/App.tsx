import React from "react";
import { Budget, Expenses, Form } from "components";
import { Container } from "ui";

const App = () => {
  return (
    <Container>
      <Budget />
      <Expenses />
      <Form />
    </Container>
  );
};

export default App;
