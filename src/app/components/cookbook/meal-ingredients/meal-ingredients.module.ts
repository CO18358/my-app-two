import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealIngredientsRoutingModule } from './meal-ingredients-routing.module';
import { MealIngredientsComponent } from './meal-ingredients.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MealIngredientsComponent],
  imports: [
    CommonModule,
    MealIngredientsRoutingModule,
    MatIconModule,
    SpinnerModule,
    MatButtonModule,
  ],
})
export class MealIngredientsModule {}
