import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeSeasonsComponent } from './anime-seasons.component';

const routes: Routes = [
  { path: '', component: AnimeSeasonsComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeSeasonsRoutingModule {}
