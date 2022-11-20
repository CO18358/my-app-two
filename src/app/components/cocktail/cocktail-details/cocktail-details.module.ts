import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailDetailsRoutingModule } from './cocktail-details-routing.module';
import { CocktailDetailsComponent } from './cocktail-details.component';


@NgModule({
  declarations: [
    CocktailDetailsComponent
  ],
  imports: [
    CommonModule,
    CocktailDetailsRoutingModule
  ]
})
export class CocktailDetailsModule { }
