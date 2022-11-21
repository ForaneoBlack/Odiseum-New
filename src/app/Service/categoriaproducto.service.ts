import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoriaProducto } from "../Models/categoriaProducto";

@Injectable({
  providedIn: "root",
})
export class CategoriaproductoService {
<<<<<<< HEAD
  //url = "http://localhost:8080/api/categoriaproducto";
  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/categoriaproducto';
=======
  url = "http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/categoriaproducto";

>>>>>>> origin/alberto
  constructor(private http: HttpClient) {}

  getCategoria(): Observable<CategoriaProducto[]> {
    return this.http.get<CategoriaProducto[]>(this.url+'/listar');
  }

  crearCategoria(categoriapro: CategoriaProducto): Observable<CategoriaProducto>{
    return this.http.post<CategoriaProducto>(this.url+'/crear',categoriapro);
  }
  obtenerCategoria(catproid: number): Observable<CategoriaProducto>{
    return this.http.get<CategoriaProducto>(this.url+'/listar id/'+catproid);
  }
  updateCategoria(categoria: CategoriaProducto): Observable<CategoriaProducto>{
    return this.http.put<CategoriaProducto>(this.url+'/editar/'+categoria.catproid,categoria);
  }
  eliminar(categoria: CategoriaProducto){
    const path =`${this.url}/${categoria.catproid}` ;
    return this.http.delete<CategoriaProducto>(this.url+"/eliminar/"+categoria.catproid);
  }
}
