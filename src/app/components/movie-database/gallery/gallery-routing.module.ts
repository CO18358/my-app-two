import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  { path: '', component: GalleryComponent, outlet: 'movie-db' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
