import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { solicitud } from '../Models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = 'http://localhost:8080/api/solicitud';

  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<solicitud[]> {
    return this.http.get<solicitud[]>(this.url+'/listar');
  }
}
