import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaListsRoutingModule } from './manga-lists-routing.module';
import { MangaListsComponent } from './manga-lists.component';


@NgModule({
  declarations: [
    MangaListsComponent
  ],
  imports: [
    CommonModule,
    MangaListsRoutingModule
  ]
})
export class MangaListsModule { }
