import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrencyModel } from '../models/currency.model';
import { CurrenciesService } from '../services/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currencies: CurrencyModel[] = [];
  allCurrencies: CurrencyModel[] = [];

  maxItemsPerPageCtrl = new FormControl(5);
  searchValueCtrl = new FormControl('');
  searchFieldCtrl = new FormControl('code');

  constructor(private currenciesService: CurrenciesService) { }

  ngOnInit(): void {
    this.currenciesService.fetchAllCurrencies()
    .subscribe(allCurrencies => {
      this.allCurrencies = allCurrencies;
      this.currencies = this.getCurrenciesByPage(0, 5, allCurrencies);
    });

    this.maxItemsPerPageCtrl.valueChanges.subscribe(value => {
      this.currencies = this.getCurrenciesByPage(0, value, this.allCurrencies);
    });
  }

  pageChaged(page : number){
    this.currencies = this.getCurrenciesByPage(page, this.maxItemsPerPageCtrl.value, this.allCurrencies);
  }

  onSubmit(){
    const searchValue = this.searchValueCtrl.value;
    const searchField = this.searchFieldCtrl.value;
    this.currencies= this.filterCurrencies(searchValue,searchField, this.allCurrencies);
  }

  getCurrenciesByPage(page: number, maxItemsPerPage: number, allCurrencies: CurrencyModel[]): CurrencyModel[]{
    return allCurrencies && allCurrencies.slice(page * maxItemsPerPage, maxItemsPerPage * (page + 1));
  }

  filterCurrencies(searchValue: string, searchField: string , allCurrencies: CurrencyModel[]){
    return allCurrencies.filter(currency => {
       // @ts-ignore
      if(currency.attributes[searchField] && searchValue) {
        // @ts-ignore
        return currency.attributes[searchField].toUpperCase().includes(searchValue.toUpperCase());  // ts-ignore
      }
      return true;
    });
  }

}
