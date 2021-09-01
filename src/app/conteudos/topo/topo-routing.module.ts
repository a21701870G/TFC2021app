import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopoPage } from './topo.page';

const routes: Routes = [
  {
    path: '',
    component: TopoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopoPageRoutingModule {}
