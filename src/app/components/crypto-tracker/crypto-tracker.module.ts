import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoTrackerRoutingModule } from './crypto-tracker-routing.module';
import { CryptoTrackerComponent } from './crypto-tracker.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';

@NgModule({
  declarations: [CryptoTrackerComponent],
  imports: [CommonModule, CryptoTrackerRoutingModule, TitlebarModule],
})
export class CryptoTrackerModule {}
