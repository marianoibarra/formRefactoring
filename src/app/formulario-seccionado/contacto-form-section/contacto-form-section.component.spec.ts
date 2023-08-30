import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoFormSectionComponent } from './contacto-form-section.component';

describe('ContactoFormSectionComponent', () => {
  let component: ContactoFormSectionComponent;
  let fixture: ComponentFixture<ContactoFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoFormSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
