import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicForumPage } from './topic-forum.page';

describe('TopicForumPage', () => {
  let component: TopicForumPage;
  let fixture: ComponentFixture<TopicForumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicForumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
