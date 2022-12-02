import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details.component';

const routes: Routes = [
  { path: '', component: CocktailDetailsComponent, outlet: 'cocktail' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailDetailsRoutingModule {}
