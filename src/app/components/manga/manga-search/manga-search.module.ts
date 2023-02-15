import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaSearchRoutingModule } from './manga-search-routing.module';
import { MangaSearchComponent } from './manga-search.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MangaSearchComponent],
  imports: [
    CommonModule,
    MangaSearchRoutingModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class MangaSearchModule {}
