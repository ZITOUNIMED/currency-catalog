export interface CurrencyAttributesModel {
    code: string;
    name: string;
    currency_type: string;
    code_iso_numeric3: string;
    code_iso_alpha3: string;
    symbol?: string;
    native_symbol?: string;
    decimal_e?: string;
    category: string;
}
