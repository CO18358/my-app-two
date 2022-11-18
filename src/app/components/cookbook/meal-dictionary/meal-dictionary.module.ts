import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealDictionaryRoutingModule } from './meal-dictionary-routing.module';
import { MealDictionaryComponent } from './meal-dictionary.component';


@NgModule({
  declarations: [
    MealDictionaryComponent
  ],
  imports: [
    CommonModule,
    MealDictionaryRoutingModule
  ]
})
export class MealDictionaryModule { }
