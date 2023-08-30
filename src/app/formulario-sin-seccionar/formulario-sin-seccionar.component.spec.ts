import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSinSeccionarComponent } from './formulario-sin-seccionar.component';

describe('FormularioSinSeccionarComponent', () => {
  let component: FormularioSinSeccionarComponent;
  let fixture: ComponentFixture<FormularioSinSeccionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSinSeccionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSinSeccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
