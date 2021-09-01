import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicForumPage } from './topic-forum.page';

const routes: Routes = [
  {
    path: '',
    component: TopicForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicForumPageRoutingModule {}
