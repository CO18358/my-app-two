import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeInfoComponent } from './anime-info.component';

const routes: Routes = [
  { path: '', component: AnimeInfoComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeInfoRoutingModule {}
