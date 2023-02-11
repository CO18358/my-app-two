import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookbookComponent } from './cookbook.component';

const routes: Routes = [
  {
    path: '',
    component: CookbookComponent,
    children: [
      {
        path: 'search/:dish',
        loadChildren: () =>
          import('./meal-results/meal-results.module').then(
            (m) => m.MealResultsModule
          ),
      },
      {
        path: 'dictionary',
        loadChildren: () =>
          import('./meal-dictionary/meal-dictionary.module').then(
            (m) => m.MealDictionaryModule
          ),
      },
      {
        path: 'category/:category',
        loadChildren: () =>
          import('./meal-results/meal-results.module').then(
            (m) => m.MealResultsModule
          ),
      },
      {
        path: 'area/:area',
        loadChildren: () =>
          import('./meal-results/meal-results.module').then(
            (m) => m.MealResultsModule
          ),
      },
      {
        path: 'ingredient/:ingredient',
        loadChildren: () =>
          import('./meal-results/meal-results.module').then(
            (m) => m.MealResultsModule
          ),
      },
      {
        path: 'meal/:mealId',
        loadChildren: () =>
          import('./meal-details/meal-details.module').then(
            (m) => m.MealDetailsModule
          ),
      },
      {
        path: 'random',
        loadChildren: () =>
          import('./meal-details/meal-details.module').then(
            (m) => m.MealDetailsModule
          ),
      },
      {
        path: 'ingredients',
        loadChildren: () =>
          import('./meal-ingredients/meal-ingredients.module').then(
            (m) => m.MealIngredientsModule
          ),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./meal-menu/meal-menu.module').then((m) => m.MealMenuModule),
      },
      {
        path: '',
        redirectTo: '/cookbook/random',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookbookRoutingModule {}
