import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieReviewComponent } from './movie-review.component';

const routes: Routes = [
  { path: '', component: MovieReviewComponent, outlet: 'movie-db' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieReviewRoutingModule {}
