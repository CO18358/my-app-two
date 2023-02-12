import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaSearchRoutingModule } from './manga-search-routing.module';
import { MangaSearchComponent } from './manga-search.component';


@NgModule({
  declarations: [
    MangaSearchComponent
  ],
  imports: [
    CommonModule,
    MangaSearchRoutingModule
  ]
})
export class MangaSearchModule { }
