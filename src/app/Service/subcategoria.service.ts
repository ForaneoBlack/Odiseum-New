import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategoriaempresa } from '../Models/subcategoriaempresa';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  //url: string ='http://localhost:8080/api/categoriaempresa'

   url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/categoriaempresa';

  constructor(private http: HttpClient) { }

  getSubcategoria(): Observable<Subcategoriaempresa[]> {
    return this.http.get<Subcategoriaempresa[]>(this.url+'/listar');
  }
  getSubcategoriaxidcat(): Observable<Subcategoriaempresa[]> {
    return this.http.get<Subcategoriaempresa[]>(this.url+'/listar');
  }

  crearSubcategoria(subcategoria: Subcategoriaempresa): Observable<Subcategoriaempresa>{
    return this.http.post<Subcategoriaempresa>(this.url+'/crear',subcategoria);
  }

  obtenerSubcategoria(idsubcatemp: number): Observable<Subcategoriaempresa>{
    return this.http.get<Subcategoriaempresa>(this.url+'/listar id/'+idsubcatemp);
  }
 
  updateSubcategoria(subcategoria: Subcategoriaempresa): Observable<Subcategoriaempresa>{
    return this.http.put<Subcategoriaempresa>(this.url+'/editar/'+subcategoria.idsubcatemp,subcategoria);
  }
  eliminar(subcategoria: Subcategoriaempresa){
    const path =`${this.url}/${subcategoria.idsubcatemp}` ;
    return this.http.delete<Subcategoriaempresa>(this.url+"/eliminar/"+subcategoria.idsubcatemp);
  }

}
