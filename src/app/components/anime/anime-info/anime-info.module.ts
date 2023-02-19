import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeInfoRoutingModule } from './anime-info-routing.module';
import { AnimeInfoComponent } from './anime-info.component';


@NgModule({
  declarations: [
    AnimeInfoComponent
  ],
  imports: [
    CommonModule,
    AnimeInfoRoutingModule
  ]
})
export class AnimeInfoModule { }
