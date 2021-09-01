import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopoPageRoutingModule } from './topo-routing.module';

import { TopoPage } from './topo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopoPageRoutingModule
  ],
  declarations: [TopoPage]
})
export class TopoPageModule {}
