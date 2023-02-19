import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaResultsRoutingModule } from './manga-results-routing.module';
import { MangaResultsComponent } from './manga-results.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MangaResultsComponent],
  imports: [
    CommonModule,
    MangaResultsRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class MangaResultsModule {}
