import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DummyEntity } from 'src/app/models/dummyEntity.model';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';
import { DummyEntityService } from 'src/app/services/dummy-entity.service';
import {
  BotoneraComponent,
  BotoneraEmitter,
} from '../botonera/botonera.component';

@Component({
  selector: 'app-contacto-form-section',
  templateUrl: './contacto-form-section.component.html',
  styleUrls: ['./contacto-form-section.component.scss'],
})
export class ContactoFormSectionComponent implements OnInit {
  fetched: boolean;
  seccionContactosFormGroup: FormGroup;

  constructor(public bService: BreakpointObserverService) {
    this.seccionContactosFormGroup = new FormGroup({
      primerContacto: new FormGroup({
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
      }),
      segundoContacto: new FormGroup({
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
      }),
      tercerContacto: new FormGroup({
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
      }),
    });
  }

  ngOnInit(): void {}

  private _dummyEntity: DummyEntity;
  setDummyEntity(dummyEntity: DummyEntity) {
    this._dummyEntity = dummyEntity;
  }

  popularContactForm() {
    this.seccionContactosFormGroup
      .get('primerContacto.nombre')
      ?.setValue(this._dummyEntity.contactos.primero?.nombre);
    this.seccionContactosFormGroup
      .get('primerContacto.apellido')
      ?.setValue(this._dummyEntity.contactos.primero?.apellido);
    this.seccionContactosFormGroup
      .get('primerContacto.email')
      ?.setValue(this._dummyEntity.contactos.primero?.mail);
    this.seccionContactosFormGroup
      .get('primerContacto.telefono')
      ?.setValue(this._dummyEntity.contactos.primero?.telefono);

    this.seccionContactosFormGroup
      .get('segundoContacto.nombre')
      ?.setValue(this._dummyEntity.contactos.segundo?.nombre);
    this.seccionContactosFormGroup
      .get('segundoContacto.apellido')
      ?.setValue(this._dummyEntity.contactos.segundo?.apellido);
    this.seccionContactosFormGroup
      .get('segundoContacto.email')
      ?.setValue(this._dummyEntity.contactos.segundo?.mail);
    this.seccionContactosFormGroup
      .get('segundoContacto.telefono')
      ?.setValue(this._dummyEntity.contactos.segundo?.telefono);

    this.seccionContactosFormGroup
      .get('tercerContacto.nombre')
      ?.setValue(this._dummyEntity.contactos.tercero?.nombre);
    this.seccionContactosFormGroup
      .get('tercerContacto.apellido')
      ?.setValue(this._dummyEntity.contactos.tercero?.apellido);
    this.seccionContactosFormGroup
      .get('tercerContacto.email')
      ?.setValue(this._dummyEntity.contactos.tercero?.mail);
    this.seccionContactosFormGroup
      .get('tercerContacto.telefono')
      ?.setValue(this._dummyEntity.contactos.tercero?.telefono);

    this.seccionContactosFormGroup.get('seccionContactos')?.markAsPristine();
  }

  onBtnClick($event: BotoneraEmitter) {
    switch ($event) {
      case 'guardar':
        break;
      case 'limpiar':
        this.seccionContactosFormGroup.reset();
        break;
      case 'popular':
        this.popularContactForm();
        break;
    }
  }

  setFetched(state: boolean) {
    this.fetched = state;
  }

  getFetched() {
    return this.fetched;
  }
}
