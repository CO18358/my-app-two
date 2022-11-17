import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealIngredientsComponent } from './meal-ingredients.component';

const routes: Routes = [
  { path: '', component: MealIngredientsComponent, outlet: 'cookbook' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealIngredientsRoutingModule {}
