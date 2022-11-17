import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealResultsRoutingModule } from './meal-results-routing.module';
import { MealResultsComponent } from './meal-results.component';


@NgModule({
  declarations: [
    MealResultsComponent
  ],
  imports: [
    CommonModule,
    MealResultsRoutingModule
  ]
})
export class MealResultsModule { }
