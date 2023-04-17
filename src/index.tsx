import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyles } from "ui";
import { BadgetContextProvider, CurencyContextProvider, ExpensesContextProvider } from "contex";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CurencyContextProvider>
    <BadgetContextProvider>
      <ExpensesContextProvider>
        <GlobalStyles />
        <App />
      </ExpensesContextProvider>
    </BadgetContextProvider>
  </CurencyContextProvider>,
);
