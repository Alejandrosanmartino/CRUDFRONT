import { Component } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {

  nombre: string = '';
  precio?: number;


  
  closeAlert(): void {
    
  }
  constructor(private router: Router,private productoService: ProductoService) { }
  onCreate(): void {
    const producto = new Producto(this.nombre, this.precio);

    this.productoService.save(producto).subscribe(
      () => {
        alert('Se ha guardado el producto');
      },
      error => {
        alert('Error al crear el producto: ' + error.message);
      }
    );
  }
}

