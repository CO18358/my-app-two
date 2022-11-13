import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameReviewComponent } from './game-review.component';

const routes: Routes = [
  { path: '', component: GameReviewComponent, outlet: 'games' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameReviewRoutingModule {}
