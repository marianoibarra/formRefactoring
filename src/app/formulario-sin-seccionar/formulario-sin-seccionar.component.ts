import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserverService } from '../services/breakpoint-observer.service';

@Component({
  selector: 'app-formulario-sin-seccionar',
  templateUrl: './formulario-sin-seccionar.component.html',
  styleUrls: ['./formulario-sin-seccionar.component.scss'],
})
export class FormularioSinSeccionarComponent implements OnInit {
  mainFormGroup: FormGroup;

  constructor(public bService: BreakpointObserverService) {
    this.mainFormGroup = new FormGroup({
      seccionContactos: new FormGroup({
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
      }),
      seccionDirecciones: new FormGroup({
        primerDireccion: new FormGroup({
          calle: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          numero: new FormControl('', [
            Validators.required,
            Validators.maxLength(10),
            Validators.min(1),
          ]),
          localidad: new FormControl('', [
            Validators.required,
            Validators.maxLength(20),
          ]),
          provincia: new FormControl('', [
            Validators.required,
            Validators.maxLength(20),
          ]),
        }),
        segundaDireccion: new FormGroup({
          calle: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          numero: new FormControl('', [
            Validators.required,
            Validators.maxLength(10),
            Validators.min(1),
          ]),
          localidad: new FormControl('', [
            Validators.required,
            Validators.maxLength(20),
          ]),
          provincia: new FormControl('', [
            Validators.required,
            Validators.maxLength(20),
          ]),
        }),
      }),
      seccionProductos: new FormGroup({
        primerProducto: new FormGroup({
          nombre: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          stock: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          precio: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          marca: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          modelo: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
        }),
        segundoProducto: new FormGroup({
          nombre: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          stock: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          precio: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          marca: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          modelo: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
        }),
        tercerProducto: new FormGroup({
          nombre: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          stock: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          precio: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          marca: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          modelo: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
        }),
        cuartoProducto: new FormGroup({
          nombre: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          stock: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          precio: new FormControl(0, [
            Validators.required,
            Validators.maxLength(50),
            Validators.min(0),
          ]),
          marca: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
          modelo: new FormControl('', [
            Validators.required,
            Validators.maxLength(50),
          ]),
        }),
      }),
    });
  }

  ngOnInit(): void {}
}
