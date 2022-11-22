import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categoria} from "../Models/categoria";
import {Categoriaservicio} from "../Models/categoriaservicio";

@Injectable({
    providedIn: 'root'
})
export class CategoriaservicioService {

    url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/categoriaservicio';

    constructor(private http: HttpClient) {
    }

    getServicio(): Observable<Categoriaservicio[]> {
        return this.http.get<Categoriaservicio[]>(this.url + '/listar');
    }

    crearServicio(catservicio: Categoriaservicio): Observable<Categoriaservicio> {
        return this.http.post<Categoriaservicio>(this.url + '/crear', catservicio);
    }

    obtenerServicio(idcatser: number): Observable<Categoriaservicio> {
        return this.http.get<Categoriaservicio>(this.url + '/listar id/' + idcatser);
    }

    updateServicio(catservicio: Categoriaservicio): Observable<Categoriaservicio> {
        return this.http.put<Categoriaservicio>(this.url + '/editar/' + catservicio.idcatser, catservicio);
    }

    eliminar(catservicio: Categoriaservicio) {
        const path = `${this.url}/${catservicio.idcatser}`;
        return this.http.delete<Categoriaservicio>(this.url + "/eliminar/" + catservicio.idcatser);
    }
}
