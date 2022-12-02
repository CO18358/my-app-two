import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGalleryComponent } from './game-gallery.component';

const routes: Routes = [
  { path: '', component: GameGalleryComponent, outlet: 'games' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameGalleryRoutingModule {}
