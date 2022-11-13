import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './coin-details.component';

const routes: Routes = [
  { path: '', component: CoinDetailsComponent, outlet: 'crypto' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinDetailsRoutingModule {}
