import React, { useState } from "react";
import { BudgetApp, BudgetGroup, Container } from "./ui/base";
import { Title } from "./components/Title/Title";
import { CustomSelect } from "./components/Select/Select";
import { Option } from "./types";
import { Badget } from "./components/Badget/Badget";

const options: Option[] = [
  { value: 2.99, label: "USD" },
  { value: 3.27, label: "EUR" },
  { value: 3.7, label: "GBR" },
];

function App() {
  const [tips, setTips] = useState<Option>(options[0]);
  return (
    <Container>
      <BudgetApp>
        <Title name="Budget App" />
        <CustomSelect options={options} setTips={setTips} defaultValue={options[0]} />
      </BudgetApp>
      <BudgetGroup>
        <Badget />
      </BudgetGroup>
    </Container>
  );
}

export default App;
