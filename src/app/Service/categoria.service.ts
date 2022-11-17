import { HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseURL = 'http://localhost:9898/api/categoriaempresa'; 
  

  constructor(private httpClient: HttpClient) { }

//este metodo nos sirve para obtener las categorias
obtenerListaDeCategoria():Observable<Categoria[]>{
  return this.httpClient.get<Categoria[]>(`${this.baseURL}`+'/listar');
}

  //este metodo nos sirve para registrar una categoria
  registrarCategoria(categoria:Categoria) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/crear',categoria);
  }

  getcategoriaporid(id:number):Observable<Categoria>{
    return this.httpClient.get<Categoria>(`${this.baseURL}/editar/${id}`);
  }
  editar(categoria:Categoria){
    console.log(categoria)
    return this.httpClient.put<Categoria>(`${this.baseURL}`+'/editar/',categoria)
  }

  eliminarcategoria(categoria:Categoria): Observable<Categoria>{
    return this.httpClient.delete(`${this.baseURL}/eliminar/${categoria.id_categoria}`);
  }
  
  // eliminarcategoria(categoria:Categoria){
  //   const path =`${this.baseURL}/eliminar/${categoria.id_categoria}` ;
  //   return this.httpClient.delete<Categoria>(this.baseURL+"/eliminar/"+categoria.id_categoria);
  // }

}

