import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeResultsRoutingModule } from './anime-results-routing.module';
import { AnimeResultsComponent } from './anime-results.component';


@NgModule({
  declarations: [
    AnimeResultsComponent
  ],
  imports: [
    CommonModule,
    AnimeResultsRoutingModule
  ]
})
export class AnimeResultsModule { }
