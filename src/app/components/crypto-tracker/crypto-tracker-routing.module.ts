import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoTrackerComponent } from './crypto-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoTrackerComponent,
    children: [
      {
        path: 'coins',
        loadChildren: () =>
          import('./coin-list/coin-list.module').then((m) => m.CoinListModule),
      },
      {
        path: 'coins/:coinId',
        loadChildren: () =>
          import('./coin-details/coin-details.module').then(
            (m) => m.CoinDetailsModule
          ),
      },
      {
        path: '',
        redirectTo: '/crypto/coins',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTrackerRoutingModule {}
