import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empresa } from '../Models/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/empresa';

  constructor(private http: HttpClient) {}

  getEmpresa(): Observable<empresa[]> {
    return this.http.get<empresa[]>(this.url+'/listar');
  }

  getEmpresa_usuid(): Observable<empresa[]> {
    return this.http.get<empresa[]>(this.url+'/listar');
  }

  crearEmpresa(empresa: empresa): Observable<empresa>{
    return this.http.post<empresa>(this.url+'/crear',empresa);
  }

  obtenerEmpresa(idempresa: number): Observable<empresa>{
    return this.http.get<empresa>(this.url+'/listar id/'+idempresa);
  }

  updateEmpresa(empresa: empresa): Observable<empresa>{
    return this.http.put<empresa>(this.url+'/editar/'+empresa.idempresa,empresa);
  }
}
