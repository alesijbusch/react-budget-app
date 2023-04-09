import React, { useState } from "react";
import { Container } from "./ui/base";

import { Badget } from "./components/Badget/Badget";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";

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
