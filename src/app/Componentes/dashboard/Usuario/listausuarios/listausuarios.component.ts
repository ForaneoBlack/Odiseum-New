import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../Models/usuario";
import {UsuarioService} from "../../../../Service/usuario.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {RolService} from "../../../../Service/rol.service";
import {Rol} from "../../../../Models/rol";


@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})
export class ListausuariosComponent implements OnInit {

  user: Usuario = new Usuario();
  users: Usuario [] = [];
    rol: Rol [] = [];

  constructor(private modalService: NgbModal,private userService: UsuarioService,private activedRoute: ActivatedRoute,private rolService: RolService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getRoles();
    this.activedRoute.params
        .subscribe(params => {
          let usu_id: number = params['usu_id'];
          if (usu_id){
            this.userService.obtenerUser(usu_id)
                .subscribe(response => this.user = response)
          }
        })
  }

  getUsers(){
    this.userService.getUser()
        .subscribe(response => this.users = response)
  }

    getRoles() {
        this.rolService.getRol()
            .subscribe(response => this.rol = response);
    }

  abrirmodaleditar(user: Usuario){
    this.user = {...user};
  }

  agregarUser(){
    this.userService.crearUser(this.user)
        .subscribe(response => {
            console.log('exito');
            console.log(response);
          this.users.push(response);
          document.getElementById("closeM1").click();
        })
  }

  cleanModal(){
    this.user = new Usuario();
  }

}
