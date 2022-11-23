import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenshinDbComponent } from './genshin-db.component';

const routes: Routes = [
  { path: '', component: GenshinDbComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenshinDbRoutingModule {}
