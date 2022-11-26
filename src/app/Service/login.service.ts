import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credenciales } from '../Models/credenciales';
import { Userlogin } from '../Models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  url: string = 'http://apiemprendimientos-env.eba-d95suqjg.us-east-1.elasticbeanstalk.com/api/usuario';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  constructor(private http:HttpClient) { }
 

  Login(userRequest: Userlogin):Observable<Userlogin>{
    //console.log(userRequest.username, userrequest.password)
      return this.http.post<Userlogin>(this.url+"/login_web",userRequest);
  }
  
}
