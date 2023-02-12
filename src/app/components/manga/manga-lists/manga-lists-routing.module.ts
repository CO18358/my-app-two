import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListsComponent } from './manga-lists.component';

const routes: Routes = [
  { path: '', component: MangaListsComponent, outlet: 'manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaListsRoutingModule {}
