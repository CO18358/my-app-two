import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoetryRoutingModule } from './poetry-routing.module';
import { PoetryComponent } from './poetry.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TrimTextModule } from 'src/app/shared/trim-text/trim-text.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [PoetryComponent],
  imports: [
    CommonModule,
    PoetryRoutingModule,
    TitlebarModule,
    MatProgressSpinnerModule,
    TrimTextModule,
    MatTabsModule,
  ],
})
export class PoetryModule {}
