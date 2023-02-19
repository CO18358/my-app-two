import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRecommendRoutingModule } from './anime-recommend-routing.module';
import { AnimeRecommendComponent } from './anime-recommend.component';


@NgModule({
  declarations: [
    AnimeRecommendComponent
  ],
  imports: [
    CommonModule,
    AnimeRecommendRoutingModule
  ]
})
export class AnimeRecommendModule { }
