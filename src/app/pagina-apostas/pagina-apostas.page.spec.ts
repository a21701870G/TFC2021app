import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaApostasPage } from './pagina-apostas.page';

describe('PaginaApostasPage', () => {
  let component: PaginaApostasPage;
  let fixture: ComponentFixture<PaginaApostasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaApostasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaApostasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
