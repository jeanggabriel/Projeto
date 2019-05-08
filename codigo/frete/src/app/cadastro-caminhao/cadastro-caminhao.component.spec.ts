import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCaminhaoComponent } from './cadastro-caminhao.component';

describe('CadastroCaminhaoComponent', () => {
  let component: CadastroCaminhaoComponent;
  let fixture: ComponentFixture<CadastroCaminhaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCaminhaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCaminhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
