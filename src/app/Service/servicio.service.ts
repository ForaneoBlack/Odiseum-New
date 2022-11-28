import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../Models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url: string = 'http://localhost:9898/api/servicio';

  constructor(private http: HttpClient) { }

  getServicio(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.url+'/listar');
  }

  crearServicio(servicio: Servicio): Observable<Servicio>{
    return this.http.post<Servicio>(this.url+'/crear',servicio);
  }

  obtenerServicio(idservicio: number): Observable<Servicio>{
    return this.http.get<Servicio>(this.url+'/listar id/'+idservicio);
  }

  obtenerServicioempresa(idempresa: number): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.url+'/listar/empresa/'+idempresa);
  }
 
  updateServicio(servicio: Servicio): Observable<Servicio>{
    return this.http.put<Servicio>(this.url+'/editar/'+servicio.idservicio,servicio);
  }
  eliminar(servicio: Servicio){
    const path =`${this.url}/${servicio.idservicio}` ;
    return this.http.delete<Servicio>(this.url+"/eliminar/"+servicio.idservicio);
  }

  

}
