import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './cocktail.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailComponent,
    children: [
      {
        path: 'search/:drink',
        loadChildren: () =>
          import('./cocktail-results/cocktail-results.module').then(
            (m) => m.CocktailResultsModule
          ),
      },
      {
        path: 'category/:category',
        loadChildren: () =>
          import('./cocktail-results/cocktail-results.module').then(
            (m) => m.CocktailResultsModule
          ),
      },
      {
        path: 'alcoholic/:alcoholic',
        loadChildren: () =>
          import('./cocktail-results/cocktail-results.module').then(
            (m) => m.CocktailResultsModule
          ),
      },
      {
        path: 'ingredient/:ingredient',
        loadChildren: () =>
          import('./cocktail-results/cocktail-results.module').then(
            (m) => m.CocktailResultsModule
          ),
      },
      {
        path: 'glass/:glass',
        loadChildren: () =>
          import('./cocktail-results/cocktail-results.module').then(
            (m) => m.CocktailResultsModule
          ),
      },
      {
        path: 'drink/:drinkId',
        loadChildren: () =>
          import('./cocktail-details/cocktail-details.module').then(
            (m) => m.CocktailDetailsModule
          ),
      },
      {
        path: 'random',
        loadChildren: () =>
          import('./cocktail-details/cocktail-details.module').then(
            (m) => m.CocktailDetailsModule
          ),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./cocktail-menu/cocktail-menu.module').then(
            (m) => m.CocktailMenuModule
          ),
      },
      {
        path: '',
        redirectTo: '/cocktail/menu',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailRoutingModule {}
