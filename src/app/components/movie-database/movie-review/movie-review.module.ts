import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieReviewRoutingModule } from './movie-review-routing.module';
import { MovieReviewComponent } from './movie-review.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [MovieReviewComponent],
  imports: [CommonModule, MovieReviewRoutingModule, MatProgressBarModule],
})
export class MovieReviewModule {}
