import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetclickPageRoutingModule } from './betclick-routing.module';

import { BetclickPage } from './betclick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetclickPageRoutingModule
  ],
  declarations: [BetclickPage]
})
export class BetclickPageModule {}
