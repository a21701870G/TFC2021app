import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BetptPage } from './betpt.page';

describe('BetptPage', () => {
  let component: BetptPage;
  let fixture: ComponentFixture<BetptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BetptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
