import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionFormSectionComponent } from './direccion-form-section.component';

describe('DireccionFormSectionComponent', () => {
  let component: DireccionFormSectionComponent;
  let fixture: ComponentFixture<DireccionFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionFormSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
