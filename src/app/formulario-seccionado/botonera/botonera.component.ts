import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

export type BotoneraEmitter = 'limpiar' | 'popular' | 'guardar';

@Component({
  selector: 'app-botonera[formGroup]',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss'],
})
export class BotoneraComponent implements OnInit {
  @Input() fetched: boolean;

  @Input('formGroup') formGroup: FormGroup = new FormGroup({});

  @Output('onBtnClick') btnEmitter: EventEmitter<BotoneraEmitter> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  popularFormulario() {
    this.btnEmitter.emit('popular');
  }

  limpiarFormulario() {
    this.btnEmitter.emit('limpiar');
  }

  guardarFormulario() {
    this.btnEmitter.emit('guardar');
  }
}
