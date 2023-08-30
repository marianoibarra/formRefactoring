import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { DummyEntity } from '../models/dummyEntity.model';

@Injectable({
  providedIn: 'root',
})
export class DummyEntityService {
  constructor() {}

  getDummyEntity(): Observable<DummyEntity> {
    return timer(2000).pipe(
      take(1),
      map((x: number) => {
        const dummyEntity: DummyEntity = {
          contactos: {
            primero: {
              nombre: 'Gaston',
              apellido: 'Chatelet',
              mail: 'gchatele@gmail.com',
              telefono: '1156387503',
            },
            segundo: {
              nombre: 'Juan',
              apellido: 'Gomez',
              mail: 'ggomez@gmail.com',
              telefono: '3436387511',
            },
            tercero: {
              nombre: 'Maria',
              apellido: 'Perez',
              mail: 'mperez@gmail.com',
              telefono: '3434242425',
            },
          },
          direcciones: {
            primera: {
              calle: 'Ayacucho',
              numero: 894,
              localidad: 'Parana',
              provincia: 'Entre Rios',
            },
            segunda: {
              calle: 'Carbo',
              numero: 344,
              localidad: 'Parana',
              provincia: 'Entre Rios',
            },
          },
          productos: {
            primero: {
              nombre: 'Arroz',
              marca: 'Marolio',
              modelo: 'Doble carolina',
              cantidad: 150,
              precio: 120,
            },
            segundo: {
              nombre: 'Fideos',
              marca: 'Don Vicente',
              modelo: 'Spagetti',
              cantidad: 94,
              precio: 145,
            },
            tercero: {
              nombre: 'Harina',
              marca: 'Blanca Flor',
              modelo: '0000',
              cantidad: 64,
              precio: 115,
            },
            cuarto: {
              nombre: 'Galletitas',
              marca: 'Morixe',
              modelo: 'Sin sal',
              cantidad: 45,
              precio: 180,
            },
          },
        };
        return dummyEntity;
      })
    );
  }
}
