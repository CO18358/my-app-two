import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeQuoteRoutingModule } from './anime-quote-routing.module';
import { AnimeQuoteComponent } from './anime-quote.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AnimeQuoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    AnimeQuoteRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    TitlebarModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class AnimeQuoteModule {}
