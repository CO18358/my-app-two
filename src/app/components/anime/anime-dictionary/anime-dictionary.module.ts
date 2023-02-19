import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeDictionaryRoutingModule } from './anime-dictionary-routing.module';
import { AnimeDictionaryComponent } from './anime-dictionary.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AnimeDictionaryComponent],
  imports: [
    CommonModule,
    AnimeDictionaryRoutingModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class AnimeDictionaryModule {}
