import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empresa } from '../Models/empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  url: string = 'http://localhost:8080/api/empresa';

  constructor(private http: HttpClient) {}

  getEmpresas(): Observable<empresa[]> {
    return this.http.get<empresa[]>(this.url+'/listar');
  }

  crearEmpresa(empresa: empresa): Observable<empresa>{
    return this.http.post<empresa>(this.url+'/crear',empresa);
  }
}
