import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bet365Page } from './bet365.page';

describe('Bet365Page', () => {
  let component: Bet365Page;
  let fixture: ComponentFixture<Bet365Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bet365Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bet365Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
