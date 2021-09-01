import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bet365Page } from './bet365.page';

const routes: Routes = [
  {
    path: '',
    component: Bet365Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bet365PageRoutingModule {}
