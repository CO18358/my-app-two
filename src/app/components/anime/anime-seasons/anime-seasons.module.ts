import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeSeasonsRoutingModule } from './anime-seasons-routing.module';
import { AnimeSeasonsComponent } from './anime-seasons.component';


@NgModule({
  declarations: [
    AnimeSeasonsComponent
  ],
  imports: [
    CommonModule,
    AnimeSeasonsRoutingModule
  ]
})
export class AnimeSeasonsModule { }
