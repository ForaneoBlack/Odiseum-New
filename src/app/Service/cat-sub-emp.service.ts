import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat_Sub_Emp } from '../Models/cat_sub_emp';

@Injectable({
  providedIn: 'root'
})
export class CatSubEmpService {

  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/cat-sub-emp';

  constructor(private http: HttpClient) { }

  getCatSubEmp(): Observable<Cat_Sub_Emp[]> {
    return this.http.get<Cat_Sub_Emp[]>(this.url+'/listar');
  }
  crearCatSubEmp(cat_sub_emp: Cat_Sub_Emp): Observable<Cat_Sub_Emp>{
    return this.http.post<Cat_Sub_Emp>(this.url+'/crear',cat_sub_emp);
  }
  obtenerCatSubEmp(iddetalle: number): Observable<Cat_Sub_Emp>{
    return this.http.get<Cat_Sub_Emp>(this.url+'/listar id/'+iddetalle);
  }
  updateCatSubEmp(cat_sub_emp: Cat_Sub_Emp): Observable<Cat_Sub_Emp>{
    return this.http.put<Cat_Sub_Emp>(this.url+'/editar/'+cat_sub_emp.iddetalle,cat_sub_emp);
  }
  eliminar(cat_sub_emp: Cat_Sub_Emp){
    const path =`${this.url}/${cat_sub_emp.iddetalle}` ;
    return this.http.delete<Cat_Sub_Emp>(this.url+"/eliminar/"+cat_sub_emp.iddetalle);
  }
}
