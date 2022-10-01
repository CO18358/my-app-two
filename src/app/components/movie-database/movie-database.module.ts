import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDatabaseRoutingModule } from './movie-database-routing.module';
import { MovieDatabaseComponent } from './movie-database.component';
import { FormsModule } from '@angular/forms';
import { TrimTextPipe } from 'src/app/shared/trim-text/trim-text.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MovieDatabaseComponent, TrimTextPipe],
  imports: [
    CommonModule,
    MovieDatabaseRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class MovieDatabaseModule {}
