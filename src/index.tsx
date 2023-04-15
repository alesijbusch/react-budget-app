import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./ui/GlobalStyles";
import { ExpensesContextProvider } from "contex/ExpensesContext/ExpensesContext";
import { CurencyContextProvider } from "contex/CurrencyContext/CurrencyContext";
import { BadgetContextProvider } from "contex/BudgetContext/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BadgetContextProvider>
    <ExpensesContextProvider>
      <GlobalStyles />
      <App />
    </ExpensesContextProvider>
  </BadgetContextProvider>,
);
