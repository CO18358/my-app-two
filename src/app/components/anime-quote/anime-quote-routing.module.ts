import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeQuoteComponent } from './anime-quote.component';

const routes: Routes = [{ path: '', component: AnimeQuoteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeQuoteRoutingModule { }
