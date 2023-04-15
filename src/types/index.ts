interface Option {
  value: number;
  label: string;
}

interface FormValue {
  id: string;
  name: string;
  cost: string;
}
interface Expense {
  id: string;
  name: string;
  cost: string;
}
interface BadgetCardProps {
  budget: string;
}
interface Currency {
  curency: string
}
export type { Option, FormValue, Expense, BadgetCardProps, Currency };
