import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaTopComponent } from './manga-top.component';

const routes: Routes = [
  { path: '', component: MangaTopComponent, outlet: 'manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaTopRoutingModule {}
