import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaResultsComponent } from './manga-results.component';

const routes: Routes = [
  { path: '', component: MangaResultsComponent, outlet: 'manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaResultsRoutingModule {}
