import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriviaRoutingModule } from './trivia-routing.module';
import { TriviaComponent } from './trivia.component';
import { FormsModule } from '@angular/forms';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [TriviaComponent],
  imports: [
    CommonModule,
    TriviaRoutingModule,
    FormsModule,
    TitlebarModule,
    SpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSliderModule,
  ],
})
export class TriviaModule {}
