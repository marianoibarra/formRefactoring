import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';
import { DummyEntityService } from 'src/app/services/dummy-entity.service';
import { BotoneraEmitter } from '../botonera/botonera.component';

@Component({
  selector: 'app-contacto-form-section',
  templateUrl: './contacto-form-section.component.html',
  styleUrls: ['./contacto-form-section.component.scss'],
})
export class ContactoFormSectionComponent implements OnInit {
  private fetched: boolean;
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

  setContactForm() {
    throw new Error('Method not implemented.');
  }

  onBtnClick($event: BotoneraEmitter) {
    switch ($event) {
      case 'guardar':
        break;
      case 'limpiar':
        this.seccionContactosFormGroup.reset();
        break;
      case 'popular':
        this.setContactForm();
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
