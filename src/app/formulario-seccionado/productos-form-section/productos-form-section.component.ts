import { Component, forwardRef } from '@angular/core';
import { FormSection } from '../abstraccion/IFormSection.model';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DummyEntity } from 'src/app/models/dummyEntity.model';

@Component({
  selector: 'app-productos-form-section',
  templateUrl: './productos-form-section.component.html',
  styleUrls: ['./productos-form-section.component.scss'],
  providers: [
    {
      provide: FormSection,
      useExisting: forwardRef(() => ProductosFormSectionComponent),
    },
  ],
})
export class ProductosFormSectionComponent extends FormSection<DummyEntity> {
  constructor(public bService: BreakpointObserverService) {
    super();

    this.formGroup.addControl(
      'primerProducto',
      new FormGroup({
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
      })
    );
    this.formGroup.addControl(
      'segundoProducto',
      new FormGroup({
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
      })
    );
    this.formGroup.addControl(
      'tercerProducto',
      new FormGroup({
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
      })
    );
    this.formGroup.addControl(
      'cuartoProducto',
      new FormGroup({
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
      })
    );
  }

  popularFormulario(): void {
    this.formGroup
      .get('primerProducto.nombre')
      ?.setValue(this._dummyEntity.productos.primero?.nombre);
    this.formGroup
      .get('primerProducto.marca')
      ?.setValue(this._dummyEntity.productos.primero?.marca);
    this.formGroup
      .get('primerProducto.modelo')
      ?.setValue(this._dummyEntity.productos.primero?.modelo);
    this.formGroup
      .get('primerProducto.stock')
      ?.setValue(this._dummyEntity.productos.primero?.cantidad);
    this.formGroup
      .get('primerProducto.precio')
      ?.setValue(this._dummyEntity.productos.primero?.precio);

    this.formGroup
      .get('segundoProducto.nombre')
      ?.setValue(this._dummyEntity.productos.segundo?.nombre);
    this.formGroup
      .get('segundoProducto.marca')
      ?.setValue(this._dummyEntity.productos.segundo?.marca);
    this.formGroup
      .get('segundoProducto.modelo')
      ?.setValue(this._dummyEntity.productos.segundo?.modelo);
    this.formGroup
      .get('segundoProducto.stock')
      ?.setValue(this._dummyEntity.productos.segundo?.cantidad);
    this.formGroup
      .get('segundoProducto.precio')
      ?.setValue(this._dummyEntity.productos.segundo?.precio);

    this.formGroup
      .get('tercerProducto.nombre')
      ?.setValue(this._dummyEntity.productos.tercero?.nombre);
    this.formGroup
      .get('tercerProducto.marca')
      ?.setValue(this._dummyEntity.productos.tercero?.marca);
    this.formGroup
      .get('tercerProducto.modelo')
      ?.setValue(this._dummyEntity.productos.tercero?.modelo);
    this.formGroup
      .get('tercerProducto.stock')
      ?.setValue(this._dummyEntity.productos.tercero?.cantidad);
    this.formGroup
      .get('tercerProducto.precio')
      ?.setValue(this._dummyEntity.productos.tercero?.precio);

    this.formGroup
      .get('cuartoProducto.nombre')
      ?.setValue(this._dummyEntity.productos.cuarto?.nombre);
    this.formGroup
      .get('cuartoProducto.marca')
      ?.setValue(this._dummyEntity.productos.cuarto?.marca);
    this.formGroup
      .get('cuartoProducto.modelo')
      ?.setValue(this._dummyEntity.productos.cuarto?.modelo);
    this.formGroup
      .get('cuartoProducto.stock')
      ?.setValue(this._dummyEntity.productos.cuarto?.cantidad);
    this.formGroup
      .get('cuartoProducto.precio')
      ?.setValue(this._dummyEntity.productos.cuarto?.precio);

    this.formGroup.markAsPristine();
  }
}
