import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealIngredientsRoutingModule } from './meal-ingredients-routing.module';
import { MealIngredientsComponent } from './meal-ingredients.component';


@NgModule({
  declarations: [
    MealIngredientsComponent
  ],
  imports: [
    CommonModule,
    MealIngredientsRoutingModule
  ]
})
export class MealIngredientsModule { }
