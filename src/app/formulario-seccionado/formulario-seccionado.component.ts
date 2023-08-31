import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyEntity } from '../models/dummyEntity.model';
import { DummyEntityService } from '../services/dummy-entity.service';
import { ContactoFormSectionComponent } from './contacto-form-section/contacto-form-section.component';

@Component({
  selector: 'app-formulario-seccionado',
  templateUrl: './formulario-seccionado.component.html',
  styleUrls: ['./formulario-seccionado.component.scss'],
})
export class FormularioSeccionadoComponent implements OnInit {
  dummyEntity: DummyEntity;
  fetched: boolean;
  @ViewChild(ContactoFormSectionComponent)
  contactFormSection: ContactoFormSectionComponent;

  constructor(private dummyService: DummyEntityService) {}

  ngOnInit(): void {
    this.fetched = false;
    this.dummyService
      .getDummyEntity()
      .subscribe({
        next: (entity) => {
          this.dummyEntity = entity;
          this.popularSecciones();
        },
      })
      .add(() => {
        this.fetched = true;
        if (this.contactFormSection) this.contactFormSection.setFetched(true);
      });
  }

  ngAfterViewInit() {
    const a = 54;
  }

  popularSecciones() {
    // llama al metodo que popula cada una de las secciones
    this.contactFormSection.setDummyEntity(this.dummyEntity);
    this.contactFormSection.popularContactForm();
  }
}
