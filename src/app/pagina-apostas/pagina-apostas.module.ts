import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaApostasPageRoutingModule } from './pagina-apostas-routing.module';

import { PaginaApostasPage } from './pagina-apostas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaApostasPageRoutingModule
  ],
  declarations: [PaginaApostasPage]
})
export class PaginaApostasPageModule {}
