import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameReviewRoutingModule } from './game-review-routing.module';
import { GameReviewComponent } from './game-review.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [GameReviewComponent],
  imports: [CommonModule, GameReviewRoutingModule, MatProgressSpinnerModule],
})
export class GameReviewModule {}
