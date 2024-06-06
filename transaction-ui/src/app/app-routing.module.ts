import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransitionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'transaction' },
  { path: 'transaction', component: TransitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
