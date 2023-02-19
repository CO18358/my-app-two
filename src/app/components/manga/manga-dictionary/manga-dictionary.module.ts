import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaDictionaryRoutingModule } from './manga-dictionary-routing.module';
import { MangaDictionaryComponent } from './manga-dictionary.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MangaDictionaryComponent],
  imports: [
    CommonModule,
    MangaDictionaryRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class MangaDictionaryModule {}
