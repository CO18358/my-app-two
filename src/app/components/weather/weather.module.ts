import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherRoutingModule, TitlebarModule],
})
export class WeatherModule {}
