import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailMenuRoutingModule } from './cocktail-menu-routing.module';
import { CocktailMenuComponent } from './cocktail-menu.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [CocktailMenuComponent],
  imports: [CommonModule, CocktailMenuRoutingModule, SpinnerModule],
})
export class CocktailMenuModule {}
