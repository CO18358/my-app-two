import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaSearchRoutingModule } from './manga-search-routing.module';
import { MangaSearchComponent } from './manga-search.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [MangaSearchComponent],
  imports: [
    CommonModule,
    MangaSearchRoutingModule,
    SpinnerModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonToggleModule,
  ],
})
export class MangaSearchModule {}
