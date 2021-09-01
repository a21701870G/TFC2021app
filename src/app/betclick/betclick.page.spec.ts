import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BetclickPage } from './betclick.page';

describe('BetclickPage', () => {
  let component: BetclickPage;
  let fixture: ComponentFixture<BetclickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetclickPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BetclickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
