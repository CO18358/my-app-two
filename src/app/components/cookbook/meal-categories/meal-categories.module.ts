import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealCategoriesRoutingModule } from './meal-categories-routing.module';
import { MealCategoriesComponent } from './meal-categories.component';


@NgModule({
  declarations: [
    MealCategoriesComponent
  ],
  imports: [
    CommonModule,
    MealCategoriesRoutingModule
  ]
})
export class MealCategoriesModule { }
