import { Component, OnInit } from "@angular/core";
import { EmpresaService } from "src/app/Service/empresa.service";
import { empresa } from "src/app/Models/empresa";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioService } from "src/app/Service/usuario.service";
import { Usuario } from "src/app/Models/usuario";

@Component({
  selector: "app-datos-empresa",
  templateUrl: "./datos-empresa.component.html",
  styleUrls: ["./datos-empresa.component.css"],
})
export class DatosEmpresaComponent implements OnInit {
  
  id:number;

  usuarios: Usuario = new Usuario();
  usuario: Usuario [] = [];

  empresas: empresa = new empresa();
  empresa: empresa [] = [];

  constructor(private activedRoute: ActivatedRoute, private usuarioService: UsuarioService, private empresaService: EmpresaService, private router: Router) {}

  ngOnInit(): void {
    this.getEmpresas();
    this.getUsuarios();
    console.log()
    
    this.activedRoute.params
      .subscribe(params => {
        let usu_id: number = params['usu_id'];
        console.log(usu_id)
        if (usu_id) {
          this.usuarioService.obtenerUser(usu_id)
            .subscribe(response => this.usuarios = response)
        }
      })
  }

  getUsuarios() {
    this.usuarioService.getUser()
      .subscribe(response => this.usuario = response);
  }
  getEmpresas() {
    this.empresaService.getEmpresa()
      .subscribe(response => this.empresa = response);
  }

  agregarEmpresa() {
    this.empresaService.crearEmpresa(this.empresas)
      .subscribe(response => {
        console.log('exito');
        console.log(response)
        this.empresa.push(response);
      });
  }

  cleanModal(){
    this.empresas = new empresa();
  }
}
