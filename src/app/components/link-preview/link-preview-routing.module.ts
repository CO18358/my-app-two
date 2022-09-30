import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkPreviewComponent } from './link-preview.component';

const routes: Routes = [{ path: '', component: LinkPreviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkPreviewRoutingModule {}
