import { Observable, of } from "rxjs";
import { CurrencyModel } from "../models/currency.model";
import { CurrenciesService } from "./currencies.service";

import currencies from '../../assets/currencies.json';

export class CurrenciesMockService implements CurrenciesService {
    fetchAllCurrencies(): Observable<CurrencyModel[]> {
        return of(currencies);
    }

    getCurrency(id: string): Observable<CurrencyModel> {
        const list = [...currencies].filter(c => c.id === id);
        let currency = null;
        if(list && list.length){
            currency = list[0];
        }
       return of(currency as CurrencyModel)
    }
}