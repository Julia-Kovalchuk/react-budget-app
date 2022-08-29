import { ReactNode } from "react";
import { Currency } from "../../types";

export interface ICurrencyContext {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export interface ICurrencyProviderProps {
  children: ReactNode;
}
