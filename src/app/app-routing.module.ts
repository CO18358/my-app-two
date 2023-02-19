import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'anime',
    loadChildren: () =>
      import('./components/anime/anime.module').then((m) => m.AnimeModule),
  },
  {
    path: 'manga',
    loadChildren: () =>
      import('./components/manga/manga.module').then((m) => m.MangaModule),
  },
  {
    path: 'quotes',
    loadChildren: () =>
      import('./components/anime-quote/anime-quote.module').then(
        (m) => m.AnimeQuoteModule
      ),
  },
  {
    path: 'horoscope',
    loadChildren: () =>
      import('./components/horoscope/horoscope.module').then(
        (m) => m.HoroscopeModule
      ),
  },
  {
    path: 'fitness',
    loadChildren: () =>
      import('./components/fitness/fitness.module').then(
        (m) => m.FitnessModule
      ),
  },
  {
    path: 'crypto',
    loadChildren: () =>
      import('./components/crypto-tracker/crypto-tracker.module').then(
        (m) => m.CryptoTrackerModule
      ),
  },
  {
    path: 'cocktail',
    loadChildren: () =>
      import('./components/cocktail/cocktail.module').then(
        (m) => m.CocktailModule
      ),
  },
  {
    path: 'cookbook',
    loadChildren: () =>
      import('./components/cookbook/cookbook.module').then(
        (m) => m.CookbookModule
      ),
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./components/weather/weather.module').then(
        (m) => m.WeatherModule
      ),
  },
  {
    path: 'poetry',
    loadChildren: () =>
      import('./components/poetry/poetry.module').then((m) => m.PoetryModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./components/games/games.module').then((m) => m.GamesModule),
  },
  {
    path: 'trivia',
    loadChildren: () =>
      import('./components/trivia/trivia.module').then((m) => m.TriviaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
