import React, { useState } from "react";
import { Container } from "./ui/base";

import { Badget } from "./components/Badget/Badget";
import { Expenses } from "./components/Expenses/Expenses";

function App() {
  return (
    <Container>
      <Badget />
      <Expenses />
    </Container>
  );
}

export default App;
