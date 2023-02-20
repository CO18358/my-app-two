import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeSearchRoutingModule } from './anime-search-routing.module';
import { AnimeSearchComponent } from './anime-search.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeSearchComponent],
  imports: [
    CommonModule,
    AnimeSearchRoutingModule,
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
export class AnimeSearchModule {}
