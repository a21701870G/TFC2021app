import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicForumPageRoutingModule } from './topic-forum-routing.module';

import { TopicForumPage } from './topic-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicForumPageRoutingModule
  ],
  declarations: [TopicForumPage]
})
export class TopicForumPageModule {}
