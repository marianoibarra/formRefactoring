import {
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DummyEntity } from '../models/dummyEntity.model';
import { DummyEntityService } from '../services/dummy-entity.service';
import { FormSection } from './abstraccion/IFormSection.model';
import { ContactoFormSectionComponent } from './contacto-form-section/contacto-form-section.component';
import { DireccionFormSectionComponent } from './direccion-form-section/direccion-form-section.component';

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
  @ViewChild(DireccionFormSectionComponent)
  direccionesFormSection: DireccionFormSectionComponent;

  @ViewChildren(FormSection) formSections: QueryList<FormSection<DummyEntity>>;

  constructor(
    private dummyService: DummyEntityService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetched = false;
    this.dummyService
      .getDummyEntity()
      .subscribe({
        next: (entity) => {
          this.dummyEntity = entity;
          this.popularSecciones();
          this.habilitarCampos();
        },
      })
      .add(() => {
        this.fetched = true;
        this.setFetchedDeSecciones();
      });
  }

  ngAfterViewInit() {
    this.deshabilitarCampos();
    this.cdr.detectChanges();
  }

  popularSecciones() {
    this.formSections.forEach((fs) => {
      fs.setDummyEntity(this.dummyEntity);
      fs.popularFormulario();
    });
  }

  deshabilitarCampos() {
    this.formSections.forEach((fs) => {
      fs.deshabilitarCampos();
    });
  }

  habilitarCampos() {
    this.formSections.forEach((fs) => {
      fs.habilitarCampos();
    });
  }

  setFetchedDeSecciones() {
    this.formSections?.forEach((fs) => {
      fs.setFetched(true);
    });
  }
}
