import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealDetailsRoutingModule } from './meal-details-routing.module';
import { MealDetailsComponent } from './meal-details.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MealDetailsComponent],
  imports: [
    CommonModule,
    MealDetailsRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class MealDetailsModule {}
