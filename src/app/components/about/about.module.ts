import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatCardModule } from '@angular/material/card';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatCardModule,
    TitlebarModule
  ]
})
export class AboutModule { }
