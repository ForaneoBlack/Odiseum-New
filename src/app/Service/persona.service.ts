import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Persona} from "../Models/persona";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/persona';

  constructor(private http: HttpClient) { }

  crearPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url + '/crear', persona);

  }
  actualizarPersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.url+'/editar/'+persona.idpersona,persona);
  }

}
