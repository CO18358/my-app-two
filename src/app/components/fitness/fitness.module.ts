import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { FitnessComponent } from './fitness.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CounterComponent } from './counter/counter.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FitnessComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FitnessRoutingModule,
    TitlebarModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ]
})
export class FitnessModule { }
