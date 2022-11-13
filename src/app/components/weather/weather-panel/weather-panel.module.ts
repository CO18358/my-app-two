import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherPanelRoutingModule } from './weather-panel-routing.module';
import { WeatherPanelComponent } from './weather-panel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [WeatherPanelComponent],
  imports: [CommonModule, WeatherPanelRoutingModule, MatProgressSpinnerModule],
})
export class WeatherPanelModule {}
