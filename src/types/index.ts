export interface IExpense {
  name: string;
  cost: string;
  id: string;
}

export type Currency = "$" | "€" | "£";

export interface ISelectOption {
  value: Currency;
  label: string;
}
