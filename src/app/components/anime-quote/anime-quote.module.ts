import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeQuoteRoutingModule } from './anime-quote-routing.module';
import { AnimeQuoteComponent } from './anime-quote.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';

@NgModule({
  declarations: [
    AnimeQuoteComponent,
    ShowQuoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnimeQuoteRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    TitlebarModule
  ]
})
export class AnimeQuoteModule { }
