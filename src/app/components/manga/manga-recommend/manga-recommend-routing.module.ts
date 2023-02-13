import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaRecommendComponent } from './manga-recommend.component';

const routes: Routes = [
  { path: '', component: MangaRecommendComponent, outlet: 'manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaRecommendRoutingModule {}
