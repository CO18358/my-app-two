import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaComponent } from './manga.component';

const routes: Routes = [
  {
    path: '',
    component: MangaComponent,
    children: [
      {
        path: 'genre',
        loadChildren: () =>
          import('./manga-lists/manga-lists.module').then(
            (m) => m.MangaListsModule
          ),
      },
      {
        path: 'magazine',
        loadChildren: () =>
          import('./manga-lists/manga-lists.module').then(
            (m) => m.MangaListsModule
          ),
      },
      {
        path: 'top',
        loadChildren: () =>
          import('./manga-top/manga-top.module').then((m) => m.MangaTopModule),
      },
      {
        path: 'results',
        loadChildren: () =>
          import('./manga-results/manga-results.module').then(
            (m) => m.MangaResultsModule
          ),
      },
      {
        path: 'recommendation',
        loadChildren: () =>
          import('./manga-recommend/manga-recommend.module').then(
            (m) => m.MangaRecommendModule
          ),
      },
      {
        path: 'dictionary',
        loadChildren: () =>
          import('./manga-dictionary/manga-dictionary.module').then(
            (m) => m.MangaDictionaryModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./manga-search/manga-search.module').then(
            (m) => m.MangaSearchModule
          ),
      },
      {
        path: 'id/:id',
        loadChildren: () =>
          import('./manga-info/manga-info.module').then(
            (m) => m.MangaInfoModule
          ),
      },
      {
        path: '',
        redirectTo: '/manga/top',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaRoutingModule {}
