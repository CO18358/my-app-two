import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeQuoteRoutingModule } from './anime-quote-routing.module';
import { AnimeQuoteComponent } from './anime-quote.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AnimeQuoteComponent],
  imports: [
    CommonModule,
    AnimeQuoteRoutingModule,
    TitlebarModule,
    SpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ClipboardModule,
    ReactiveFormsModule,
    MatToolbarModule,
  ],
})
export class AnimeQuoteModule {}
