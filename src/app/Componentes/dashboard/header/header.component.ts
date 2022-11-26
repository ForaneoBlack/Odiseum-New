import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credenciales } from 'src/app/Models/credenciales';
import { Usuario } from 'src/app/Models/usuario';
import { LoginService } from 'src/app/Service/login.service';
import { Userlogin, rol_id } from '../../../Models/userlogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public datos:Userlogin=new Userlogin();
  public rol?:String="";
  issloading=true;
  usuario: Usuario[]=[];
  public persona:Credenciales=new Credenciales();
  constructor( private router:Router, private loginservice:LoginService)
  { }
  ngAfterViewInit(): void {
   setTimeout(()=>{
     this.issloading=false;
   },1000)
 }

 ngOnInit(): void {
   if(this.usuario!=null){     
     //datos de usuario rol username
      
     this.datos=JSON.parse(sessionStorage['usuario']);   
     this.rol=this.datos.rol_id.rolnombre;     

   }else{
     window.localStorage.clear();
     localStorage.removeItem("usuario");
     
     
   }
 }
 
 logout():void{
   sessionStorage.clear;  
   this.router.navigate(['/login']).then(() => {
     window.location.reload();
   });
 }

}
