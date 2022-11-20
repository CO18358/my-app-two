import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailDetailsRoutingModule } from './cocktail-details-routing.module';
import { CocktailDetailsComponent } from './cocktail-details.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [CocktailDetailsComponent],
  imports: [CommonModule, CocktailDetailsRoutingModule, SpinnerModule],
})
export class CocktailDetailsModule {}
