
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {ConteudosPage} from "./conteudos.page";

describe('conteudosPage', () => {
  let component: ConteudosPage;
  let fixture: ComponentFixture<ConteudosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
