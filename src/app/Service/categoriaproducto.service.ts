import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoriaProducto } from "../Models/categoriaProducto";

@Injectable({
  providedIn: "root",
})
export class CategoriaproductoService {
  url = "http://localhost:8080/api/categoriaproducto";

  constructor(private http: HttpClient) {}

  getCategoria(): Observable<CategoriaProducto[]> {
    return this.http.get<CategoriaProducto[]>(this.url+'/listar');
  }

  crearCategoria(categoriapro: CategoriaProducto): Observable<CategoriaProducto>{
    return this.http.post<CategoriaProducto>(this.url+'/crear',categoriapro);
  }
  obtenerCategoria(catproid: number): Observable<CategoriaProducto>{
    return this.http.get<CategoriaProducto>(this.url+'/listar/'+catproid);
  }
  updateCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto>{
    return this.http.put<CategoriaProducto>(this.url+'/editar/'+categoria.catproid,categoria);
  }
  eliminar(categoria: CategoriaProducto){
    const path =`${this.url}/${categoria.catproid}` ;
    return this.http.delete<CategoriaProducto>(this.url+"/eliminar/"+categoria.catproid);
  }
}
