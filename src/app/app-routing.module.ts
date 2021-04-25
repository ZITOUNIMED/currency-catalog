import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyComponent } from './currencies/currency/currency.component';
import { CurrencyResolverService } from './services/currency.resolver.service';

const routes: Routes = [
  { path: 'currency', component: CurrenciesComponent },
  { path: 'currency/:id', component: CurrencyComponent, resolve: {
    currency: CurrencyResolverService
  } },
  { path: '', redirectTo: '/currency', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }