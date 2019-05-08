import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoCaminhaoComponent } from './exibicao-caminhao.component';

describe('ExibicaoCaminhaoComponent', () => {
  let component: ExibicaoCaminhaoComponent;
  let fixture: ComponentFixture<ExibicaoCaminhaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibicaoCaminhaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibicaoCaminhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
