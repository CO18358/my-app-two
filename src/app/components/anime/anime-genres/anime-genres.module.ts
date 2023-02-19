import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeGenresRoutingModule } from './anime-genres-routing.module';
import { AnimeGenresComponent } from './anime-genres.component';


@NgModule({
  declarations: [
    AnimeGenresComponent
  ],
  imports: [
    CommonModule,
    AnimeGenresRoutingModule
  ]
})
export class AnimeGenresModule { }
