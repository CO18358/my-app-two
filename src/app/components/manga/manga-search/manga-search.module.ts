import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaSearchRoutingModule } from './manga-search-routing.module';
import { MangaSearchComponent } from './manga-search.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [MangaSearchComponent],
  imports: [
    CommonModule,
    MangaSearchRoutingModule,
    SpinnerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
})
export class MangaSearchModule {}
