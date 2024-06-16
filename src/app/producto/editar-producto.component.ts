import { Component } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

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
        error => alert('Error' + error)
      )
      this.router.navigate(['/']);

      
    };

    onUpdate():void{
      const id = this.activatedRoute.snapshot.params.id;
      this.productoService.update(id,this.producto).subscribe(
        data =>{
          this.producto = data;
        },
        error => alert('Error' + error)
      )

    }
}
