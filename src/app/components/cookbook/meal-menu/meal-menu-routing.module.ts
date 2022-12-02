import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealMenuComponent } from './meal-menu.component';

const routes: Routes = [
  { path: '', component: MealMenuComponent, outlet: 'cookbook' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealMenuRoutingModule {}
