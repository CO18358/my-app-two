import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealMenuRoutingModule } from './meal-menu-routing.module';
import { MealMenuComponent } from './meal-menu.component';


@NgModule({
  declarations: [
    MealMenuComponent
  ],
  imports: [
    CommonModule,
    MealMenuRoutingModule
  ]
})
export class MealMenuModule { }
