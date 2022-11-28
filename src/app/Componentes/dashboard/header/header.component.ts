import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Credenciales } from 'src/app/Models/credenciales';
import { Usuario } from 'src/app/Models/usuario';
import { LoginService } from 'src/app/Service/login.service';
import { Userlogin, rol_id } from '../../../Models/userlogin';
import { EmpresaLogin } from '../../../Models/empresalogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public datos:EmpresaLogin=new EmpresaLogin();
  public rol?:String="";
  public nombre:String="";
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
  
   if(JSON.parse(sessionStorage['usuario'])!=""){     
     //datos de usuario rol username
      
     this.datos=JSON.parse(sessionStorage['usuario']);   
     this.rol=this.datos.usu_id.rol_id.rolnombre;     
     this.nombre=this.datos.usu_id.usuusuario;
     console.log(this.datos)

   }else{
     window.localStorage.clear();
     localStorage.removeItem("usuario");
     console.log("regresar al login");
     
     
   }
 }
 
 logout():void{
  console.log("cerrando sesion")
   sessionStorage.clear;  
   sessionStorage.removeItem("usuario");
   this.router.navigate(['/login']).then(() => {
     window.location.reload();
   });
 }

}
