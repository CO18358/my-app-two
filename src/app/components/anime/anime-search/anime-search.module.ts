import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeSearchRoutingModule } from './anime-search-routing.module';
import { AnimeSearchComponent } from './anime-search.component';


@NgModule({
  declarations: [
    AnimeSearchComponent
  ],
  imports: [
    CommonModule,
    AnimeSearchRoutingModule
  ]
})
export class AnimeSearchModule { }
