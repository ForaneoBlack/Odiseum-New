import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/prodcuto';
  url: string = 'http://localhost:9898/api/prodcuto';

  constructor(private http: HttpClient) { }

  getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url+'/listar');
  }

  crearProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.url+'/crear',producto);
  }

  obtenerProducto(idproducto: number): Observable<Producto>{
    return this.http.get<Producto>(this.url+'/listar id/'+idproducto);
  }

  obtenerProductoempresa(idempresa: number): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+'/listar/empresa/'+idempresa);
  }
 
  updateProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(this.url+'/editar/'+producto.idproducto,producto);
  }
  eliminar(producto: Producto){
    const path =`${this.url}/${producto.idproducto}` ;
    return this.http.delete<Producto>(this.url+"/eliminar/"+producto.idproducto);
  }


}
