import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaRecommendRoutingModule } from './manga-recommend-routing.module';
import { MangaRecommendComponent } from './manga-recommend.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MangaRecommendComponent],
  imports: [
    CommonModule,
    MangaRecommendRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class MangaRecommendModule {}
