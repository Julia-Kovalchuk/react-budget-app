import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BudgetContextProvider } from "./context/BudgetContex/BudgetContex";
import { CurrencyContextProvider } from "./context/CurrencyContex/CurrencyContex";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { GlobalStyle } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CurrencyContextProvider>
    <BudgetContextProvider>
      <ExpensesContextProvider>
        <GlobalStyle />
        <App />
      </ExpensesContextProvider>
    </BudgetContextProvider>
  </CurrencyContextProvider>
);
