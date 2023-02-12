import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaInfoRoutingModule } from './manga-info-routing.module';
import { MangaInfoComponent } from './manga-info.component';


@NgModule({
  declarations: [
    MangaInfoComponent
  ],
  imports: [
    CommonModule,
    MangaInfoRoutingModule
  ]
})
export class MangaInfoModule { }
