import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeSeasonsRoutingModule } from './anime-seasons-routing.module';
import { AnimeSeasonsComponent } from './anime-seasons.component';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeSeasonsComponent],
  imports: [
    CommonModule,
    AnimeSeasonsRoutingModule,
    MatIconModule,
    SpinnerModule,
  ],
})
export class AnimeSeasonsModule {}
