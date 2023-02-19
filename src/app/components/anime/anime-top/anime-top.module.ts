import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeTopRoutingModule } from './anime-top-routing.module';
import { AnimeTopComponent } from './anime-top.component';


@NgModule({
  declarations: [
    AnimeTopComponent
  ],
  imports: [
    CommonModule,
    AnimeTopRoutingModule
  ]
})
export class AnimeTopModule { }
