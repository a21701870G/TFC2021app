import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopoPage } from './topo.page';

describe('TopoPage', () => {
  let component: TopoPage;
  let fixture: ComponentFixture<TopoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
