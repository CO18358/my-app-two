import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeTopRoutingModule } from './anime-top-routing.module';
import { AnimeTopComponent } from './anime-top.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [AnimeTopComponent],
  imports: [
    CommonModule,
    AnimeTopRoutingModule,
    SpinnerModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class AnimeTopModule {}
