import { SelectOption } from "./selectOption";

export type ExchangeRateRequest = {
  from: SelectOption,
  to: SelectOption
};

export type ExchangeRateResponse = ExchangeRateRequest & {
  rate: number,
  lastUpdated: string,
};
