import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaSearchComponent } from './manga-search.component';

const routes: Routes = [
  { path: '', component: MangaSearchComponent, outlet: 'manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaSearchRoutingModule {}
