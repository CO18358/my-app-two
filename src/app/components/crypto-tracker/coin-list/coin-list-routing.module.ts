import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list.component';

const routes: Routes = [
  { path: '', component: CoinListComponent, outlet: 'crypto' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinListRoutingModule {}
