import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CurrencyModel } from "../models/currency.model";
import { CurrenciesService } from "./currencies.service";

@Injectable({ 
    providedIn: 'root' 
})
export class CurrencyResolverService implements Resolve<CurrencyModel> {
  constructor(private service: CurrenciesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    const id = route.paramMap.get('id')
    return this.service.getCurrency(id || '');
  }
}