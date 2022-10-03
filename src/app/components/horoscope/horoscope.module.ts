import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoroscopeRoutingModule } from './horoscope-routing.module';
import { HoroscopeComponent } from './horoscope.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TrimTextPipe } from 'src/app/shared/trim-text/trim-text.pipe';

@NgModule({
  declarations: [HoroscopeComponent, TrimTextPipe],
  imports: [
    CommonModule,
    HoroscopeRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class HoroscopeModule {}
