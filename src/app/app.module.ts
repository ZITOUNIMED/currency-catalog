import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { currenciesFactory } from './services/currencies.factory';
import { CurrenciesService } from './services/currencies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyComponent } from './currencies/currency/currency.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrenciesComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: CurrenciesService,
      useFactory: currenciesFactory,
      deps: [HttpClient],
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
