import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DummyEntity } from 'src/app/models/dummyEntity.model';
import { BreakpointObserverService } from 'src/app/services/breakpoint-observer.service';
import { FormSection, IFetched } from '../abstraccion/IFormSection.model';
import { BotoneraEmitter } from '../botonera/botonera.component';

@Component({
  selector: 'app-direccion-form-section',
  templateUrl: './direccion-form-section.component.html',
  styleUrls: ['./direccion-form-section.component.scss'],
  providers: [
    {
      provide: FormSection,
      useExisting: forwardRef(() => DireccionFormSectionComponent),
    },
  ],
})
export class DireccionFormSectionComponent extends FormSection<DummyEntity> {
  constructor(public bService: BreakpointObserverService) {
    super();

    this.formGroup.addControl(
      'primerDireccion',
      new FormGroup({
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
      })
    );
    this.formGroup.addControl(
      'segundaDireccion',
      new FormGroup({
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
      })
    );
  }

  popularFormulario() {
    this.formGroup
      .get('primerDireccion.calle')
      ?.setValue(this._dummyEntity.direcciones.primera?.calle);
    this.formGroup
      .get('primerDireccion.numero')
      ?.setValue(this._dummyEntity.direcciones.primera?.numero);
    this.formGroup
      .get('primerDireccion.localidad')
      ?.setValue(this._dummyEntity.direcciones.primera?.localidad);
    this.formGroup
      .get('primerDireccion.provincia')
      ?.setValue(this._dummyEntity.direcciones.primera?.provincia);

    this.formGroup
      .get('segundaDireccion.calle')
      ?.setValue(this._dummyEntity.direcciones.segunda?.calle);
    this.formGroup
      .get('segundaDireccion.numero')
      ?.setValue(this._dummyEntity.direcciones.segunda?.numero);
    this.formGroup
      .get('segundaDireccion.localidad')
      ?.setValue(this._dummyEntity.direcciones.segunda?.localidad);
    this.formGroup
      .get('segundaDireccion.provincia')
      ?.setValue(this._dummyEntity.direcciones.segunda?.provincia);

    this.formGroup.get('seccionDirecciones')?.markAsPristine();
  }
}
