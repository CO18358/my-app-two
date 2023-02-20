import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeResultsRoutingModule } from './anime-results-routing.module';
import { AnimeResultsComponent } from './anime-results.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AnimeResultsComponent],
  imports: [
    CommonModule,
    AnimeResultsRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class AnimeResultsModule {}
