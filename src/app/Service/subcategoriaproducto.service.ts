import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subcategoriaProducto } from '../Models/subcategoriaProducto';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaproductoService {

  //url: string ='http://localhost:8080/api/categoriaproducto'
  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/subcategoriaproducto';
  constructor(private http: HttpClient) { }

  getSubcategoria(): Observable<subcategoriaProducto[]> {
    return this.http.get<subcategoriaProducto[]>(this.url+'/listar');
  }

  getSubcategoria_idcat(): Observable<subcategoriaProducto[]> {
    return this.http.get<subcategoriaProducto[]>(this.url+'/listar');
  }
  crearSubcategoria(subcategoria: subcategoriaProducto): Observable<subcategoriaProducto>{
    return this.http.post<subcategoriaProducto>(this.url+'/crear',subcategoria);
  }
  obtenerSubcategoria(subcatproid: number): Observable<subcategoriaProducto>{
    return this.http.get<subcategoriaProducto>(this.url+'/listar id/'+subcatproid);
  }
  updateSubcategoria(subcategoria: subcategoriaProducto): Observable<subcategoriaProducto>{
    return this.http.put<subcategoriaProducto>(this.url+'/editar/'+subcategoria.subcatproid,subcategoria);
  }
  eliminar(subcategoria: subcategoriaProducto){
    const path =`${this.url}/${subcategoria.subcatproid}` ;
    return this.http.delete<subcategoriaProducto>(this.url+"/eliminar/"+subcategoria.subcatproid);
  }
}
