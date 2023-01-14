import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoetryRoutingModule } from './poetry-routing.module';
import { PoetryComponent } from './poetry.component';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [PoetryComponent],
  imports: [
    CommonModule,
    PoetryRoutingModule,
    SpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
})
export class PoetryModule {}
