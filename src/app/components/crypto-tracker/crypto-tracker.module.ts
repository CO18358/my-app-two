import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoTrackerRoutingModule } from './crypto-tracker-routing.module';
import { CryptoTrackerComponent } from './crypto-tracker.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CryptoTrackerComponent],
  imports: [
    CommonModule,
    CryptoTrackerRoutingModule,
    TitlebarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
})
export class CryptoTrackerModule {}
