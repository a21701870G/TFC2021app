import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportingPage } from './sporting.page';

const routes: Routes = [
  {
    path: '',
    component: SportingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportingPageRoutingModule {}
