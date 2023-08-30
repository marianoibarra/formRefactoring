export type DummyEntity = {
  contactos: {
    primero?: Contacto;
    segundo?: Contacto;
    tercero?: Contacto;
  };
  direcciones: {
    primera?: Direccion;
    segunda?: Direccion;
  };
  productos: {
    primero?: Producto;
    segundo?: Producto;
    tercero?: Producto;
    cuarto?: Producto;
  };
};

export type Contacto = {
  nombre: string;
  apellido: string;
  mail: string;
  telefono: string;
};

export type Direccion = {
  calle: string;
  numero: number;
  localidad: string;
  provincia: string;
};

export type Producto = {
  nombre: string;
  cantidad: number;
  precio: number;
  marca: string;
  modelo: string;
};
