import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovoPage } from './novo.page';

describe('NovoPage', () => {
  let component: NovoPage;
  let fixture: ComponentFixture<NovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
