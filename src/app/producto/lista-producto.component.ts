import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listaProductos();
  }

  listaProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.log('El error es el siguiente: ' + error);
      }
    );
  }


  borrar(id: number): void {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
  
    if (confirmacion) {
      this.productoService.delete(id).subscribe(
        () => {
          alert(`Producto ${id} eliminado`);
          this.productos = this.productos.filter(producto => producto.id !== id);
        },
        error => {
          alert(`Error al eliminar el producto: ${error}`);
        }
      );
    }
  }
  

  }