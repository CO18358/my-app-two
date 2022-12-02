import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinDetailsRoutingModule } from './coin-details-routing.module';
import { CoinDetailsComponent } from './coin-details.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [CoinDetailsComponent],
  imports: [
    CommonModule,
    CoinDetailsRoutingModule,
    MatIconModule,
    SpinnerModule,
  ],
})
export class CoinDetailsModule {}
