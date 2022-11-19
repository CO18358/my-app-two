import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealCategoriesRoutingModule } from './meal-categories-routing.module';
import { MealCategoriesComponent } from './meal-categories.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MealCategoriesComponent],
  imports: [
    CommonModule,
    MealCategoriesRoutingModule,
    SpinnerModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class MealCategoriesModule {}
