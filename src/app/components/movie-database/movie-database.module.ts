import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDatabaseRoutingModule } from './movie-database-routing.module';
import { MovieDatabaseComponent } from './movie-database.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';

@NgModule({
  declarations: [MovieDatabaseComponent],
  imports: [
    CommonModule,
    MovieDatabaseRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    TitlebarModule,
  ],
})
export class MovieDatabaseModule {}
