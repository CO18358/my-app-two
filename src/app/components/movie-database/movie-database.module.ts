import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDatabaseRoutingModule } from './movie-database-routing.module';
import { MovieDatabaseComponent } from './movie-database.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TrimTextModule } from 'src/app/shared/trim-text/trim-text.module';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';

@NgModule({
  declarations: [MovieDatabaseComponent],
  imports: [
    CommonModule,
    MovieDatabaseRoutingModule,
    FormsModule,
    TrimTextModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    TitlebarModule
  ],
})
export class MovieDatabaseModule { }
