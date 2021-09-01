import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetptPageRoutingModule } from './betpt-routing.module';

import { BetptPage } from './betpt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetptPageRoutingModule
  ],
  declarations: [BetptPage]
})
export class BetptPageModule {}
