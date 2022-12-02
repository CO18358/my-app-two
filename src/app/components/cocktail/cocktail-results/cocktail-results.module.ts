import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailResultsRoutingModule } from './cocktail-results-routing.module';
import { CocktailResultsComponent } from './cocktail-results.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';
import { TrimTextModule } from 'src/app/shared/trim-text/trim-text.module';

@NgModule({
  declarations: [CocktailResultsComponent],
  imports: [
    CommonModule,
    CocktailResultsRoutingModule,
    SpinnerModule,
    MatIconModule,
    TrimTextModule,
  ],
})
export class CocktailResultsModule {}
