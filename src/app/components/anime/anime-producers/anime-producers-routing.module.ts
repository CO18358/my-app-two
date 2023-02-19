import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeProducersComponent } from './anime-producers.component';

const routes: Routes = [
  { path: '', component: AnimeProducersComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeProducersRoutingModule {}
