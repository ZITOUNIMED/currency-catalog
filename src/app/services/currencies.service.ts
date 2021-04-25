import { Observable } from "rxjs";

import { CurrencyModel } from '../models/currency.model';

export abstract class CurrenciesService {
    
    abstract fetchAllCurrencies(): Observable<CurrencyModel[]>;

    abstract getCurrency(id: string): Observable<CurrencyModel>;
}