import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyDetailsComponent } from './currency/currency-details/currency-details.component';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
  { path: 'currency', component: CurrencyComponent },
  { path: 'currency/:id', component: CurrencyDetailsComponent },
  { path: '', redirectTo: '/currency', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }