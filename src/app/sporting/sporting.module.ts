import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportingPageRoutingModule } from './sporting-routing.module';

import { SportingPage } from './sporting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportingPageRoutingModule
  ],
  declarations: [SportingPage]
})
export class SportingPageModule {}
