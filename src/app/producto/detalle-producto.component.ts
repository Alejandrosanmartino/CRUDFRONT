import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  producto: Producto = null;
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}


ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params.id;
  this.productoService.detail(id).subscribe(
    data => {
      this.producto = data; 
    },
    error => {
      alert(error)
    }
  )
  
}

volver():void{
  this.router.navigate(['/']);
}
}
