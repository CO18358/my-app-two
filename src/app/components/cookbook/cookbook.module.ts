import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookbookRoutingModule } from './cookbook-routing.module';
import { CookbookComponent } from './cookbook.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CookbookComponent],
  imports: [
    CommonModule,
    CookbookRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class CookbookModule {}
