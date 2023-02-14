import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaResultsRoutingModule } from './manga-results-routing.module';
import { MangaResultsComponent } from './manga-results.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [MangaResultsComponent],
  imports: [
    CommonModule,
    MangaResultsRoutingModule,
    SpinnerModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class MangaResultsModule {}
