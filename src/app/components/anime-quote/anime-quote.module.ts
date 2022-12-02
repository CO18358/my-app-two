import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeQuoteRoutingModule } from './anime-quote-routing.module';
import { AnimeQuoteComponent } from './anime-quote.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeQuoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    AnimeQuoteRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    TitlebarModule,
    MatSelectModule,
    MatButtonModule,
    SpinnerModule,
  ],
})
export class AnimeQuoteModule {}
