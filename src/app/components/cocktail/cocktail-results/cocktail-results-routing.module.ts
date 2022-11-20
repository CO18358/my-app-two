import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailResultsComponent } from './cocktail-results.component';

const routes: Routes = [
  { path: '', component: CocktailResultsComponent, outlet: 'cocktail' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailResultsRoutingModule {}
