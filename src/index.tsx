import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyles } from "ui";
import {
  BadgetContextProvider,
  CurencyContextProvider,
  ExpensesContextProvider,
  AppContext,
} from "contex";

const Provider = AppContext([
  BadgetContextProvider,
  CurencyContextProvider,
  ExpensesContextProvider,
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>,
);
