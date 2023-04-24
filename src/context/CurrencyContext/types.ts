import { CurrencyOption } from "types";

interface CurrencyContextState {
  currency: CurrencyOption;
  currencies: CurrencyOption[];
  setCurrency: (curency: CurrencyOption) => void;
}
export type { CurrencyContextState };
