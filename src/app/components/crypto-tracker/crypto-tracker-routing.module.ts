import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoTrackerComponent } from './crypto-tracker.component';

const routes: Routes = [{ path: '', component: CryptoTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTrackerRoutingModule {}
