import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaDictionaryComponent } from './manga-dictionary.component';

const routes: Routes = [
  { path: '', component: MangaDictionaryComponent, outlet: 'manga' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaDictionaryRoutingModule {}
