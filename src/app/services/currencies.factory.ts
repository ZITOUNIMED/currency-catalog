import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

import { CurrenciesMockService } from "./currencies.mock.service";
import { CurrenciesService } from "./currencies.service";
import { CurrenciesSgithubService } from "./currencies.sgithub.service";

export function currenciesFactory(http: HttpClient): CurrenciesService {
    if(environment.mock){
        return new CurrenciesMockService();
    }

    return new CurrenciesSgithubService(http);
}