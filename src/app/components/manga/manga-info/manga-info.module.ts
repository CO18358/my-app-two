import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaInfoRoutingModule } from './manga-info-routing.module';
import { MangaInfoComponent } from './manga-info.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [MangaInfoComponent],
  imports: [
    CommonModule,
    MangaInfoRoutingModule,
    SpinnerModule,
    MatProgressBarModule,
  ],
})
export class MangaInfoModule {}
