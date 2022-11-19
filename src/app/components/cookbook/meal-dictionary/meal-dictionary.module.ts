import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealDictionaryRoutingModule } from './meal-dictionary-routing.module';
import { MealDictionaryComponent } from './meal-dictionary.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TrimTextModule } from 'src/app/shared/trim-text/trim-text.module';

@NgModule({
  declarations: [MealDictionaryComponent],
  imports: [
    CommonModule,
    MealDictionaryRoutingModule,
    SpinnerModule,
    MatIconModule,
    MatButtonModule,
    TrimTextModule,
  ],
})
export class MealDictionaryModule {}
