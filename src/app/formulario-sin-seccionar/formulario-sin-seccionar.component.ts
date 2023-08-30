import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DummyEntity } from '../models/dummyEntity.model';
import { BreakpointObserverService } from '../services/breakpoint-observer.service';
import { DummyEntityService } from '../services/dummy-entity.service';

@Component({
  selector: 'app-formulario-sin-seccionar',
  templateUrl: './formulario-sin-seccionar.component.html',
  styleUrls: ['./formulario-sin-seccionar.component.scss'],
})
export class FormularioSinSeccionarComponent implements OnInit {
  dummyEntity: DummyEntity;
  mainFormGroup: FormGroup;
  fetched: boolean = false;

  constructor(
    public bService: BreakpointObserverService,
    private dService: DummyEntityService
  ) {
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

  ngOnInit(): void {
    this.mainFormGroup.disable();
    this.dService
      .getDummyEntity()
      .subscribe((res) => {
        this.dummyEntity = res;
        this.setContactForm();
        this.setDirectinsForm();
        this.setProducts();
      })
      .add(() => {
        this.fetched = true;
        this.mainFormGroup.enable();
      });
  }

  setContactForm() {
    this.mainFormGroup
      .get('seccionContactos.primerContacto.nombre')
      ?.setValue(this.dummyEntity.contactos.primero?.nombre);
    this.mainFormGroup
      .get('seccionContactos.primerContacto.apellido')
      ?.setValue(this.dummyEntity.contactos.primero?.apellido);
    this.mainFormGroup
      .get('seccionContactos.primerContacto.email')
      ?.setValue(this.dummyEntity.contactos.primero?.mail);
    this.mainFormGroup
      .get('seccionContactos.primerContacto.telefono')
      ?.setValue(this.dummyEntity.contactos.primero?.telefono);

    this.mainFormGroup
      .get('seccionContactos.segundoContacto.nombre')
      ?.setValue(this.dummyEntity.contactos.segundo?.nombre);
    this.mainFormGroup
      .get('seccionContactos.segundoContacto.apellido')
      ?.setValue(this.dummyEntity.contactos.segundo?.apellido);
    this.mainFormGroup
      .get('seccionContactos.segundoContacto.email')
      ?.setValue(this.dummyEntity.contactos.segundo?.mail);
    this.mainFormGroup
      .get('seccionContactos.segundoContacto.telefono')
      ?.setValue(this.dummyEntity.contactos.segundo?.telefono);

    this.mainFormGroup
      .get('seccionContactos.tercerContacto.nombre')
      ?.setValue(this.dummyEntity.contactos.tercero?.nombre);
    this.mainFormGroup
      .get('seccionContactos.tercerContacto.apellido')
      ?.setValue(this.dummyEntity.contactos.tercero?.apellido);
    this.mainFormGroup
      .get('seccionContactos.tercerContacto.email')
      ?.setValue(this.dummyEntity.contactos.tercero?.mail);
    this.mainFormGroup
      .get('seccionContactos.tercerContacto.telefono')
      ?.setValue(this.dummyEntity.contactos.tercero?.telefono);

    this.mainFormGroup.get('seccionContactos')?.markAsPristine();
  }

  setDirectinsForm() {
    this.mainFormGroup
      .get('seccionDirecciones.primerDireccion.calle')
      ?.setValue(this.dummyEntity.direcciones.primera?.calle);
    this.mainFormGroup
      .get('seccionDirecciones.primerDireccion.numero')
      ?.setValue(this.dummyEntity.direcciones.primera?.numero);
    this.mainFormGroup
      .get('seccionDirecciones.primerDireccion.localidad')
      ?.setValue(this.dummyEntity.direcciones.primera?.localidad);
    this.mainFormGroup
      .get('seccionDirecciones.primerDireccion.provincia')
      ?.setValue(this.dummyEntity.direcciones.primera?.provincia);

    this.mainFormGroup
      .get('seccionDirecciones.segundaDireccion.calle')
      ?.setValue(this.dummyEntity.direcciones.segunda?.calle);
    this.mainFormGroup
      .get('seccionDirecciones.segundaDireccion.numero')
      ?.setValue(this.dummyEntity.direcciones.segunda?.numero);
    this.mainFormGroup
      .get('seccionDirecciones.segundaDireccion.localidad')
      ?.setValue(this.dummyEntity.direcciones.segunda?.localidad);
    this.mainFormGroup
      .get('seccionDirecciones.segundaDireccion.provincia')
      ?.setValue(this.dummyEntity.direcciones.segunda?.provincia);

    this.mainFormGroup.get('seccionDirecciones')?.markAsPristine();
  }

  setProducts() {
    this.mainFormGroup
      .get('seccionProductos.primerProducto.nombre')
      ?.setValue(this.dummyEntity.productos.primero?.nombre);
    this.mainFormGroup
      .get('seccionProductos.primerProducto.marca')
      ?.setValue(this.dummyEntity.productos.primero?.marca);
    this.mainFormGroup
      .get('seccionProductos.primerProducto.modelo')
      ?.setValue(this.dummyEntity.productos.primero?.modelo);
    this.mainFormGroup
      .get('seccionProductos.primerProducto.stock')
      ?.setValue(this.dummyEntity.productos.primero?.cantidad);
    this.mainFormGroup
      .get('seccionProductos.primerProducto.precio')
      ?.setValue(this.dummyEntity.productos.primero?.precio);

    this.mainFormGroup
      .get('seccionProductos.segundoProducto.nombre')
      ?.setValue(this.dummyEntity.productos.segundo?.nombre);
    this.mainFormGroup
      .get('seccionProductos.segundoProducto.marca')
      ?.setValue(this.dummyEntity.productos.segundo?.marca);
    this.mainFormGroup
      .get('seccionProductos.segundoProducto.modelo')
      ?.setValue(this.dummyEntity.productos.segundo?.modelo);
    this.mainFormGroup
      .get('seccionProductos.segundoProducto.stock')
      ?.setValue(this.dummyEntity.productos.segundo?.cantidad);
    this.mainFormGroup
      .get('seccionProductos.segundoProducto.precio')
      ?.setValue(this.dummyEntity.productos.segundo?.precio);

    this.mainFormGroup
      .get('seccionProductos.tercerProducto.nombre')
      ?.setValue(this.dummyEntity.productos.tercero?.nombre);
    this.mainFormGroup
      .get('seccionProductos.tercerProducto.marca')
      ?.setValue(this.dummyEntity.productos.tercero?.marca);
    this.mainFormGroup
      .get('seccionProductos.tercerProducto.modelo')
      ?.setValue(this.dummyEntity.productos.tercero?.modelo);
    this.mainFormGroup
      .get('seccionProductos.tercerProducto.stock')
      ?.setValue(this.dummyEntity.productos.tercero?.cantidad);
    this.mainFormGroup
      .get('seccionProductos.tercerProducto.precio')
      ?.setValue(this.dummyEntity.productos.tercero?.precio);

    this.mainFormGroup
      .get('seccionProductos.cuartoProducto.nombre')
      ?.setValue(this.dummyEntity.productos.cuarto?.nombre);
    this.mainFormGroup
      .get('seccionProductos.cuartoProducto.marca')
      ?.setValue(this.dummyEntity.productos.cuarto?.marca);
    this.mainFormGroup
      .get('seccionProductos.cuartoProducto.modelo')
      ?.setValue(this.dummyEntity.productos.cuarto?.modelo);
    this.mainFormGroup
      .get('seccionProductos.cuartoProducto.stock')
      ?.setValue(this.dummyEntity.productos.cuarto?.cantidad);
    this.mainFormGroup
      .get('seccionProductos.cuartoProducto.precio')
      ?.setValue(this.dummyEntity.productos.cuarto?.precio);

    this.mainFormGroup.get('seccionProductos')?.markAsPristine();
  }
}
