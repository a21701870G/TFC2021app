import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportingPage } from './sporting.page';

describe('SportingPage', () => {
  let component: SportingPage;
  let fixture: ComponentFixture<SportingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
