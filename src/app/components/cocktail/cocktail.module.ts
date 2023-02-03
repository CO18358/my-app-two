import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CocktailComponent } from './cocktail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [CocktailComponent],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class CocktailModule {}
