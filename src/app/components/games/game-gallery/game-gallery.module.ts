import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameGalleryRoutingModule } from './game-gallery-routing.module';
import { GameGalleryComponent } from './game-gallery.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GameGalleryComponent],
  imports: [
    CommonModule,
    GameGalleryRoutingModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class GameGalleryModule {}
