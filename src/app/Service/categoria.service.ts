import { HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    url: string ='http://localhost:8080/api/categoriaempresa'

  // url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/categoriaempresa';

  constructor(private http: HttpClient) { }

  getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url+'/listar');
  }

  crearCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.url+'/crear',categoria);
  }

  obtenerCategoria(idcatemp: number): Observable<Categoria>{
    return this.http.get<Categoria>(this.url+'/listar id/'+idcatemp);
  }
 
  updateCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(this.url+'/editar/'+categoria.idcatemp,categoria);
  }
  eliminar(categoria: Categoria){
    const path =`${this.url}/${categoria.idcatemp}` ;
    return this.http.delete<Categoria>(this.url+"/eliminar/"+categoria.idcatemp);
  }

}

