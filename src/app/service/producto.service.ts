import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoUrl = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoUrl + 'lista');
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.productoUrl}detail/${id}`);
  }

  public detailByNombre(nombre: String): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.productoUrl}detailByNombre/${nombre}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoUrl + 'create', producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(`${this.productoUrl}update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.productoUrl}delete/${id}`);
  }
}
