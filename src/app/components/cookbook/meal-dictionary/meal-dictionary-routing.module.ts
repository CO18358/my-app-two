import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealDictionaryComponent } from './meal-dictionary.component';

const routes: Routes = [
  { path: '', component: MealDictionaryComponent, outlet: 'cookbook' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealDictionaryRoutingModule {}
