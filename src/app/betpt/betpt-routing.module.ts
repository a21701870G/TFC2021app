import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetptPage } from './betpt.page';

const routes: Routes = [
  {
    path: '',
    component: BetptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetptPageRoutingModule {}
