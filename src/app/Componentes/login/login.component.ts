import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { LoginService } from 'src/app/Service/login.service';
import { Userlogin } from 'src/app/Models/userlogin';
import Swal from 'sweetalert2';
import { rol_id } from '../../Models/userlogin';

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
        console.log(data.rol_id.rolnombre)
        sessionStorage.clear;
        sessionStorage.setItem('usuario', JSON.stringify(data));
          
          this.router
            .navigate(["/dashboard/inicio"])
            .then(() => {
              
            });
        
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
