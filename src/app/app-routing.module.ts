import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShipmentsComponent } from './shipments/shipments.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CustomersComponent } from './customers/customers.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: ShipmentsComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
