import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaResultsRoutingModule } from './manga-results-routing.module';
import { MangaResultsComponent } from './manga-results.component';


@NgModule({
  declarations: [
    MangaResultsComponent
  ],
  imports: [
    CommonModule,
    MangaResultsRoutingModule
  ]
})
export class MangaResultsModule { }
