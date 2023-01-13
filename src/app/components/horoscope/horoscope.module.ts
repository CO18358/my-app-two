import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoroscopeRoutingModule } from './horoscope-routing.module';
import { HoroscopeComponent } from './horoscope.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [HoroscopeComponent],
  imports: [
    CommonModule,
    HoroscopeRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    TitlebarModule,
    SpinnerModule,
  ],
})
export class HoroscopeModule {}
