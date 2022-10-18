import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookbookRoutingModule } from './cookbook-routing.module';
import { CookbookComponent } from './cookbook.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CookbookComponent],
  imports: [CommonModule, CookbookRoutingModule, TitlebarModule, MatIconModule],
})
export class CookbookModule {}
