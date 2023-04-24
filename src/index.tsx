import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyles } from "ui";
import {
  BadgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
  AppContext,
} from "context";

const Provider = AppContext([
  BadgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>,
);
