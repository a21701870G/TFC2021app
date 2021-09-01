import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bet365PageRoutingModule } from './bet365-routing.module';

import { Bet365Page } from './bet365.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bet365PageRoutingModule
  ],
  declarations: [Bet365Page]
})
export class Bet365PageModule {}
