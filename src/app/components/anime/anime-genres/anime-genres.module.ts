import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeGenresRoutingModule } from './anime-genres-routing.module';
import { AnimeGenresComponent } from './anime-genres.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeGenresComponent],
  imports: [CommonModule, AnimeGenresRoutingModule, SpinnerModule],
})
export class AnimeGenresModule {}
