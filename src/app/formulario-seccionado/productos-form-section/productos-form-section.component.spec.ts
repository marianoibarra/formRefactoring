import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFormSectionComponent } from './productos-form-section.component';

describe('ProductosFormSectionComponent', () => {
  let component: ProductosFormSectionComponent;
  let fixture: ComponentFixture<ProductosFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosFormSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
