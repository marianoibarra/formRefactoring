import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DummyEntity } from 'src/app/models/dummyEntity.model';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';
import { DummyEntityService } from 'src/app/services/dummy-entity.service';
import { FormSection, IFetched } from '../abstraccion/IFormSection.model';
import {
  BotoneraComponent,
  BotoneraEmitter,
} from '../botonera/botonera.component';

@Component({
  selector: 'app-contacto-form-section',
  templateUrl: './contacto-form-section.component.html',
  styleUrls: ['./contacto-form-section.component.scss'],
  providers: [
    {
      provide: FormSection,
      useExisting: forwardRef(() => ContactoFormSectionComponent),
    },
  ],
})
export class ContactoFormSectionComponent extends FormSection<DummyEntity> {
  constructor(public bService: BreakpointObserverService) {
    super();
    this.formGroup.addControl(
      'primerContacto',
      new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        telefono: new FormControl('', []),
      })
    );
    this.formGroup.addControl(
      'segundoContacto',
      new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        telefono: new FormControl('', []),
      })
    );
    this.formGroup.addControl(
      'tercerContacto',
      new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        telefono: new FormControl('', []),
      })
    );
  }

  popularFormulario() {
    this.formGroup
      .get('primerContacto.nombre')
      ?.setValue(this._dummyEntity.contactos.primero?.nombre);
    this.formGroup
      .get('primerContacto.apellido')
      ?.setValue(this._dummyEntity.contactos.primero?.apellido);
    this.formGroup
      .get('primerContacto.email')
      ?.setValue(this._dummyEntity.contactos.primero?.mail);
    this.formGroup
      .get('primerContacto.telefono')
      ?.setValue(this._dummyEntity.contactos.primero?.telefono);

    this.formGroup
      .get('segundoContacto.nombre')
      ?.setValue(this._dummyEntity.contactos.segundo?.nombre);
    this.formGroup
      .get('segundoContacto.apellido')
      ?.setValue(this._dummyEntity.contactos.segundo?.apellido);
    this.formGroup
      .get('segundoContacto.email')
      ?.setValue(this._dummyEntity.contactos.segundo?.mail);
    this.formGroup
      .get('segundoContacto.telefono')
      ?.setValue(this._dummyEntity.contactos.segundo?.telefono);

    this.formGroup
      .get('tercerContacto.nombre')
      ?.setValue(this._dummyEntity.contactos.tercero?.nombre);
    this.formGroup
      .get('tercerContacto.apellido')
      ?.setValue(this._dummyEntity.contactos.tercero?.apellido);
    this.formGroup
      .get('tercerContacto.email')
      ?.setValue(this._dummyEntity.contactos.tercero?.mail);
    this.formGroup
      .get('tercerContacto.telefono')
      ?.setValue(this._dummyEntity.contactos.tercero?.telefono);

    this.formGroup.get('seccionContactos')?.markAsPristine();
  }
}
