import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { solicitud } from '../Models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/solicitud';

  constructor(private http: HttpClient) { }

  getSolicitud(): Observable<solicitud[]> {
    return this.http.get<solicitud[]>(this.url+'/listar');
  }
  crearSolicitud(solciitud: solicitud): Observable<solicitud>{
    return this.http.post<solicitud>(this.url+'/crear',solciitud);
  }
  obtenerSolicitud(idsolicitud: number): Observable<solicitud>{
    return this.http.get<solicitud>(this.url+'/listar id/'+idsolicitud);
  }
  updateSolicitud(solicitud: solicitud): Observable<solicitud>{
    return this.http.put<solicitud>(this.url+'/editar/'+solicitud.idsolicitud,solicitud);
  }
  eliminar(solicitud: solicitud){
    const path =`${this.url}/${solicitud.idsolicitud}` ;
    return this.http.delete<solicitud>(this.url+"/eliminar/"+solicitud.idsolicitud);
  }
}
