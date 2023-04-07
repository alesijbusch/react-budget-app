import React, { useState } from "react";
import { BudgetGroup, Container } from "./ui/base";
import { Title } from "./components/Title/Title";

import { Badget } from "./components/Badget/Badget";

function App() {
  return (
    <Container>
      <BudgetGroup>
        <Badget />
      </BudgetGroup>
    </Container>
  );
}

export default App;
