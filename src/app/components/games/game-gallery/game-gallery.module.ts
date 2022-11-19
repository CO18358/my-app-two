import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameGalleryRoutingModule } from './game-gallery-routing.module';
import { GameGalleryComponent } from './game-gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

@NgModule({
  declarations: [GameGalleryComponent],
  imports: [
    CommonModule,
    GameGalleryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    SpinnerModule,
  ],
})
export class GameGalleryModule {}
