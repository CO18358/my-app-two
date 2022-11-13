import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinDetailsRoutingModule } from './coin-details-routing.module';
import { CoinDetailsComponent } from './coin-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CoinDetailsComponent],
  imports: [
    CommonModule,
    CoinDetailsRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class CoinDetailsModule {}
