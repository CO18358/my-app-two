import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: "anime-quote",
    loadChildren:() => import('./components/anime-quote/anime-quote.module').then(m => m.AnimeQuoteModule)
  },
  {
    path: "news",
    loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
