import { Component, OnInit } from '@angular/core';


import { LoginService } from 'src/app/Service/login.service';
import { Userlogin } from 'src/app/Models/userlogin';
import Swal from 'sweetalert2';
import { rol_id } from '../../Models/userlogin';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  issloading = true;
  erro = "";
  //Obtencion de datos de sesion
  public userRequest: Userlogin = new Userlogin();

  constructor(private router: Router, private LoginService: LoginService) 
  {}

  ngOnInit(): void {}

  loginAuth(): void {
    sessionStorage.clear;
    this.LoginService.Login(this.userRequest).subscribe(
      data => {
        if(data!=null){
          sessionStorage.clear;
        sessionStorage.setItem('usuario', JSON.stringify(data));
          
          this.router
            .navigate(["/dashboard/inicio"])
            .then(() => {
              
            });
          
        }else{
          Swal.fire({
            title: "Error",
            text: "Credenciales incorrectas",
            icon: "warning",
            color: "#FDFEFE",
            confirmButtonColor: "#0c3255",
            background: "#EBEE93 ",
          });

        }
        
        
        
      },
      (err) => {
        500;
        console.log(err);
        Swal.fire({
          title: "Error",
          text: "Credenciales incorrectas",
          icon: "warning",
          color: "#FDFEFE",
          confirmButtonColor: "#0c3255",
          background: "#EBEE93 ",
        });
      }
    );
  }


}
