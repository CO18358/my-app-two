import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaInfoComponent } from './manga-info.component';

const routes: Routes = [
  { path: '', component: MangaInfoComponent, outlet: 'manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaInfoRoutingModule {}
