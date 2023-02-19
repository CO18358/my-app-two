import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeRecommendComponent } from './anime-recommend.component';

const routes: Routes = [
  { path: '', component: AnimeRecommendComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeRecommendRoutingModule {}
