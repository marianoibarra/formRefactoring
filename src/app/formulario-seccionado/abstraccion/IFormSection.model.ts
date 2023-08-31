import { FormGroup } from '@angular/forms';
import { BotoneraEmitter } from '../botonera/botonera.component';

export type IFetched = {
  fetched: boolean;
};

export abstract class FormSection<T> implements IFetched {
  fetched: boolean;
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({});
  }

  public setFetched(state: boolean) {
    this.fetched = state;
  }

  protected _dummyEntity: T;
  public setDummyEntity(dummyEntity: T) {
    this._dummyEntity = dummyEntity;
  }

  deshabilitarCampos(): void {
    this.formGroup.disable();
  }

  habilitarCampos(): void {
    this.formGroup.enable();
  }

  onBtnClick($event: BotoneraEmitter) {
    switch ($event) {
      case 'guardar':
        break;
      case 'limpiar':
        this.formGroup.reset();
        break;
      case 'popular':
        this.popularFormulario();
        break;
    }
  }

  abstract popularFormulario(): void;
}
