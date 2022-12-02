import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkPreviewRoutingModule } from './link-preview-routing.module';
import { LinkPreviewComponent } from './link-preview.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
@NgModule({
  declarations: [LinkPreviewComponent],
  imports: [
    CommonModule,
    LinkPreviewRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TitlebarModule
  ],
})
export class LinkPreviewModule { }
