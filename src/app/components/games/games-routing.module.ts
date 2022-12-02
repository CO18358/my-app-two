import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: 'gallery',
        loadChildren: () =>
          import('./game-gallery/game-gallery.module').then(
            (m) => m.GameGalleryModule
          ),
      },
      {
        path: ':gameId',
        loadChildren: () =>
          import('./game-review/game-review.module').then(
            (m) => m.GameReviewModule
          ),
      },
      { path: '', redirectTo: '/games/gallery', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
