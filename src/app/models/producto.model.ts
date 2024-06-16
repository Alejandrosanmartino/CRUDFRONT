export class Producto {
    id?: number;
    nombre: string;
    precio: number | undefined;
  
    constructor(nombre: string = '', precio: number | undefined = undefined) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  