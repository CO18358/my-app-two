import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, SpinnerModule],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
