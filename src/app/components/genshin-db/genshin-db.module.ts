import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenshinDbRoutingModule } from './genshin-db-routing.module';
import { GenshinDbComponent } from './genshin-db.component';
import { TitlebarModule } from 'src/app/shared/titlebar/titlebar.module';

@NgModule({
  declarations: [GenshinDbComponent],
  imports: [CommonModule, GenshinDbRoutingModule, TitlebarModule],
})
export class GenshinDbModule {}
