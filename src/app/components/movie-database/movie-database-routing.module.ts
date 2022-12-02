import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDatabaseComponent } from './movie-database.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDatabaseComponent,
    children: [
      {
        path: 'gallery',
        loadChildren: () =>
          import('./gallery/gallery.module').then((m) => m.GalleryModule),
      },
      {
        path: 'review/:movieId',
        loadChildren: () =>
          import('./movie-review/movie-review.module').then(
            (m) => m.MovieReviewModule
          ),
      },
      {
        path: '',
        redirectTo: '/movie-db/gallery',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDatabaseRoutingModule {}
