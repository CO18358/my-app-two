import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinListRoutingModule } from './coin-list-routing.module';
import { CoinListComponent } from './coin-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [CoinListComponent],
  imports: [
    CommonModule,
    CoinListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class CoinListModule {}
