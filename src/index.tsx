import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./ui/GlobalStyles";
import { ExpensesContextProvider } from "contex/ExpensesContext/ExpensesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ExpensesContextProvider>
    <GlobalStyles />
    <App />
  </ExpensesContextProvider>,
);
