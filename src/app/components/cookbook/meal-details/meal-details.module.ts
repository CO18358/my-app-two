import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealDetailsRoutingModule } from './meal-details-routing.module';
import { MealDetailsComponent } from './meal-details.component';


@NgModule({
  declarations: [
    MealDetailsComponent
  ],
  imports: [
    CommonModule,
    MealDetailsRoutingModule
  ]
})
export class MealDetailsModule { }
