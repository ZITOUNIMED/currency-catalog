import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyDetailsComponent } from './currency/currency-details/currency-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
