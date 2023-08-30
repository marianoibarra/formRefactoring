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
  @ViewChild('contactFormSection')
  contactFormSection: ContactoFormSectionComponent;

  constructor(private dummyService: DummyEntityService) {}

  ngOnInit(): void {
    this.fetched = false;
    this.dummyService
      .getDummyEntity()
      .subscribe({
        next: (entity) => (this.dummyEntity = entity),
      })
      .add(() => {
        this.fetched = true;
        if (this.contactFormSection) this.contactFormSection.setFetched(true);
      });
  }
}
