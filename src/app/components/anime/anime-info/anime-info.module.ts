import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeInfoRoutingModule } from './anime-info-routing.module';
import { AnimeInfoComponent } from './anime-info.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeInfoComponent],
  imports: [CommonModule, AnimeInfoRoutingModule, SpinnerModule],
})
export class AnimeInfoModule {}
