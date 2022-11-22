import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subcategoriaservicio} from "../Models/subcategoriaservicio";

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaservicioService {
  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/subcategoriaservicio';

  constructor(private http: HttpClient) { }

  getSubcategoria(): Observable<Subcategoriaservicio[]> {
    return this.http.get<Subcategoriaservicio[]>(this.url+'/listar');
  }
  getSubcategoriaxidcat(): Observable<Subcategoriaservicio[]> {
    return this.http.get<Subcategoriaservicio[]>(this.url+'/listar');
  }

  crearSubcategoria(subcategoria: Subcategoriaservicio): Observable<Subcategoriaservicio>{
    return this.http.post<Subcategoriaservicio>(this.url+'/crear',subcategoria);
  }

  obtenerSubcategoria(idsubcatemp: number): Observable<Subcategoriaservicio>{
    return this.http.get<Subcategoriaservicio>(this.url+'/listar id/'+idsubcatemp);
  }

  updateSubcategoria(subcategoria: Subcategoriaservicio): Observable<Subcategoriaservicio>{
    return this.http.put<Subcategoriaservicio>(this.url+'/editar/'+subcategoria.idsubcat,subcategoria);
  }
  eliminar(subcategoria: Subcategoriaservicio){
    const path =`${this.url}/${subcategoria.idsubcat}` ;
    return this.http.delete<Subcategoriaservicio>(this.url+"/eliminar/"+subcategoria.idsubcat);
  }
}
