import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeComponent,
    children: [
      {
        path: 'genre',
        loadChildren: () =>
          import('./anime-genres/anime-genres.module').then(
            (m) => m.AnimeGenresModule
          ),
      },
      {
        path: 'producers',
        loadChildren: () =>
          import('./anime-producers/anime-producers.module').then(
            (m) => m.AnimeProducersModule
          ),
      },
      {
        path: 'top',
        loadChildren: () =>
          import('./anime-top/anime-top.module').then((m) => m.AnimeTopModule),
      },
      {
        path: 'results',
        loadChildren: () =>
          import('./anime-results/anime-results.module').then(
            (m) => m.AnimeResultsModule
          ),
      },
      {
        path: 'recommendation',
        loadChildren: () =>
          import('./anime-recommend/anime-recommend.module').then(
            (m) => m.AnimeRecommendModule
          ),
      },
      {
        path: 'dictionary',
        loadChildren: () =>
          import('./anime-dictionary/anime-dictionary.module').then(
            (m) => m.AnimeDictionaryModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./anime-search/anime-search.module').then(
            (m) => m.AnimeSearchModule
          ),
      },
      {
        path: 'seasons',
        loadChildren: () =>
          import('./anime-seasons/anime-seasons.module').then(
            (m) => m.AnimeSeasonsModule
          ),
      },
      {
        path: 'random',
        loadChildren: () =>
          import('./anime-info/anime-info.module').then(
            (m) => m.AnimeInfoModule
          ),
      },
      {
        path: 'id/:id',
        loadChildren: () =>
          import('./anime-info/anime-info.module').then(
            (m) => m.AnimeInfoModule
          ),
      },
      {
        path: '',
        redirectTo: '/anime/top',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeRoutingModule {}
