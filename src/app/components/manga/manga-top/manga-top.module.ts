import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangaTopRoutingModule } from './manga-top-routing.module';
import { MangaTopComponent } from './manga-top.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MangaTopComponent],
  imports: [
    CommonModule,
    MangaTopRoutingModule,
    SpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class MangaTopModule {}
