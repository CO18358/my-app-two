import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'anime-quote',
    loadChildren: () =>
      import('./components/anime-quote/anime-quote.module').then(
        (m) => m.AnimeQuoteModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./components/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./components/invoice/invoice.module').then(
        (m) => m.InvoiceModule
      ),
  },
  {
    path: 'link-preview',
    loadChildren: () =>
      import('./components/link-preview/link-preview.module').then(
        (m) => m.LinkPreviewModule
      ),
  },
  {
    path: 'movie-db',
    loadChildren: () =>
      import('./components/movie-database/movie-database.module').then(
        (m) => m.MovieDatabaseModule
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
    path: 'exercises',
    loadChildren: () =>
      import('./components/exercises/exercises.module').then(
        (m) => m.ExercisesModule
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
