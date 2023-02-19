import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDictionaryComponent } from './anime-dictionary.component';

const routes: Routes = [
  { path: '', component: AnimeDictionaryComponent, outlet: 'anime' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeDictionaryRoutingModule {}
