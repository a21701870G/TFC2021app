import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaApostasPage } from './pagina-apostas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaApostasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaApostasPageRoutingModule {}
