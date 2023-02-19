import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeGenresComponent } from './anime-genres.component';

const routes: Routes = [
  { path: '', component: AnimeGenresComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeGenresRoutingModule {}
