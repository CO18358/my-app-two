import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealResultsComponent } from './meal-results.component';

const routes: Routes = [
  { path: '', component: MealResultsComponent, outlet: 'cookbook' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealResultsRoutingModule {}
