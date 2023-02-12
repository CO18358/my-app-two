import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaListsRoutingModule } from './manga-lists-routing.module';
import { MangaListsComponent } from './manga-lists.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [MangaListsComponent],
  imports: [CommonModule, MangaListsRoutingModule, SpinnerModule],
})
export class MangaListsModule {}
