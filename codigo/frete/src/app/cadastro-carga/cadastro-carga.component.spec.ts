import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCargaComponent } from './cadastro-carga.component';

describe('CadastroCargaComponent', () => {
  let component: CadastroCargaComponent;
  let fixture: ComponentFixture<CadastroCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
