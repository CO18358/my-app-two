import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherPanelRoutingModule } from './weather-panel-routing.module';
import { WeatherPanelComponent } from './weather-panel.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [WeatherPanelComponent],
  imports: [CommonModule, WeatherPanelRoutingModule, SpinnerModule],
})
export class WeatherPanelModule {}
