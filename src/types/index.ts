interface Option {
  value: string;
  label: string;
}

interface Expense {
  id: string;
  name: string;
  cost: string;
}

interface Currency {
  curency: string;
}
export type { Option, Expense, Currency };
