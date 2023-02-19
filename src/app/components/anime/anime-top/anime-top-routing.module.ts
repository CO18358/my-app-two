import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeTopComponent } from './anime-top.component';

const routes: Routes = [
  { path: '', component: AnimeTopComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeTopRoutingModule {}
