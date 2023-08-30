import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSeccionadoComponent } from './formulario-seccionado.component';

describe('FormularioSeccionadoComponent', () => {
  let component: FormularioSeccionadoComponent;
  let fixture: ComponentFixture<FormularioSeccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSeccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSeccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
