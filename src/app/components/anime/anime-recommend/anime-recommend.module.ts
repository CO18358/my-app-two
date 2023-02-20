import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRecommendRoutingModule } from './anime-recommend-routing.module';
import { AnimeRecommendComponent } from './anime-recommend.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeRecommendComponent],
  imports: [
    CommonModule,
    AnimeRecommendRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class AnimeRecommendModule {}
