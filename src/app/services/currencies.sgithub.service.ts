import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { CurrenciesService } from './currencies.service';
import { CurrencyModel } from '../models/currency.model';

export class CurrenciesSgithubService implements CurrenciesService {
    private url = environment.api + 'currencies'
    constructor(private http: HttpClient){}

    fetchAllCurrencies(): Observable<CurrencyModel[]> {
        return this.http.get<CurrencyModel[]>(this.url);
    }

    getCurrency(id: string): Observable<CurrencyModel> {
        return this.http.get<CurrencyModel>(this.url + `/${id}`);
    }
}