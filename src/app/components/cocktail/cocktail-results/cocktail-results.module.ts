import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailResultsRoutingModule } from './cocktail-results-routing.module';
import { CocktailResultsComponent } from './cocktail-results.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CocktailResultsComponent],
  imports: [
    CommonModule,
    CocktailResultsRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class CocktailResultsModule {}
