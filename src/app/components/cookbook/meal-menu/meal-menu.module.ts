import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealMenuRoutingModule } from './meal-menu-routing.module';
import { MealMenuComponent } from './meal-menu.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MealMenuComponent],
  imports: [
    CommonModule,
    MealMenuRoutingModule,
    SpinnerModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
  ],
})
export class MealMenuModule {}
