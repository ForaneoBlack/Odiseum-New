import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rol} from "../Models/rol";
import {Categoria} from "../Models/categoria";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/rol';

  constructor(private http: HttpClient) { }

  getRol(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.url+'/listar');
  }

  crearRol(rol: Rol): Observable<Rol>{
    return this.http.post<Rol>(this.url+'/crear',rol);
  }

  obtenerRol(id: number): Observable<Rol>{
    return this.http.get<Rol>(this.url+'/listar/'+id);
  }
  updateRol(rol: Rol): Observable<Rol>{
    return this.http.put<Rol>(this.url+'/editar/'+rol.idrol,rol);
  }
  eliminar(rol: Rol){
    const path =`${this.url}/${rol.idrol}` ;
    return this.http.delete<Categoria>(this.url+"/eliminar/"+rol.idrol);
  }
}
