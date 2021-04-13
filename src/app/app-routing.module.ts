import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentformComponent } from './paymentform/paymentform.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'payment', component: PaymentformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
