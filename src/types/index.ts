interface CurrencyOption {
  value: string;
  label: string;
}

interface Expense {
  id: string;
  name: string;
  cost: string;
}

export type { CurrencyOption, Expense };
