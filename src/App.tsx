import React from "react";
import { Badget, Expenses, Form } from "components";
import { Container } from "ui";

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
