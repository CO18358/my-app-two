import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealResultsRoutingModule } from './meal-results-routing.module';
import { MealResultsComponent } from './meal-results.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { TrimTextModule } from 'src/app/shared/trim-text/trim-text.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MealResultsComponent],
  imports: [
    CommonModule,
    MealResultsRoutingModule,
    SpinnerModule,
    TrimTextModule,
    MatIconModule,
    TrimTextModule,
  ],
})
export class MealResultsModule {}
