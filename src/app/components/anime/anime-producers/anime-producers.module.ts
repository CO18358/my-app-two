import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeProducersRoutingModule } from './anime-producers-routing.module';
import { AnimeProducersComponent } from './anime-producers.component';


@NgModule({
  declarations: [
    AnimeProducersComponent
  ],
  imports: [
    CommonModule,
    AnimeProducersRoutingModule
  ]
})
export class AnimeProducersModule { }
