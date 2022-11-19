import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameReviewRoutingModule } from './game-review-routing.module';
import { GameReviewComponent } from './game-review.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [GameReviewComponent],
  imports: [
    CommonModule,
    GameReviewRoutingModule,
    MatIconModule,
    SpinnerModule,
  ],
})
export class GameReviewModule {}
