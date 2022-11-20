import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailMenuRoutingModule } from './cocktail-menu-routing.module';
import { CocktailMenuComponent } from './cocktail-menu.component';


@NgModule({
  declarations: [
    CocktailMenuComponent
  ],
  imports: [
    CommonModule,
    CocktailMenuRoutingModule
  ]
})
export class CocktailMenuModule { }
