import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeProducersRoutingModule } from './anime-producers-routing.module';
import { AnimeProducersComponent } from './anime-producers.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeProducersComponent],
  imports: [
    CommonModule,
    AnimeProducersRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class AnimeProducersModule {}
