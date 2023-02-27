import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaInfoRoutingModule } from './manga-info-routing.module';
import { MangaInfoComponent } from './manga-info.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [MangaInfoComponent],
  imports: [CommonModule, MangaInfoRoutingModule, SpinnerModule],
})
export class MangaInfoModule {}
