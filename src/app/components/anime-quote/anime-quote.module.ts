import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeQuoteRoutingModule } from './anime-quote-routing.module';
import { AnimeQuoteComponent } from './anime-quote.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AnimeQuoteComponent],
  imports: [
    CommonModule,
    AnimeQuoteRoutingModule,
    TitlebarModule,
    SpinnerModule,
    MatCardModule,
  ],
})
export class AnimeQuoteModule {}
