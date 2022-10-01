import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'anime-quote',
    loadChildren: () =>
      import('./components/anime-quote/anime-quote.module').then(
        (m) => m.AnimeQuoteModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./components/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./components/invoice/invoice.module').then(
        (m) => m.InvoiceModule
      ),
  },
  {
    path: 'link-preview',
    loadChildren: () =>
      import('./components/link-preview/link-preview.module').then(
        (m) => m.LinkPreviewModule
      ),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
