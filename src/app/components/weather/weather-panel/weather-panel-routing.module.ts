import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPanelComponent } from './weather-panel.component';

const routes: Routes = [
  { path: '', component: WeatherPanelComponent, outlet: 'weather' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherPanelRoutingModule {}
