import { CurrencyTypes } from "./currency-types.enum";

export interface CurrencyModel {
    code: string;
    name: string;
    currency_type: CurrencyTypes;
    code_iso_numeric3: number;
    code_iso_alpha3: number;
    symbol?: string;
    native_symbol?: string;
    decimal_e: number;
    category: string;
}