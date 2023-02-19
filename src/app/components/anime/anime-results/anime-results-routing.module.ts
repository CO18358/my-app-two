import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeResultsComponent } from './anime-results.component';

const routes: Routes = [
  { path: '', component: AnimeResultsComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeResultsRoutingModule {}
