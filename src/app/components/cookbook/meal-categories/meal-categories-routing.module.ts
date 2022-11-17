import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealCategoriesComponent } from './meal-categories.component';

const routes: Routes = [
  { path: '', component: MealCategoriesComponent, outlet: 'cookbook' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealCategoriesRoutingModule {}
