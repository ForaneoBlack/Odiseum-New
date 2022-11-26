import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empresa } from 'src/app/Models/empresa';
import { solicitud } from 'src/app/Models/solicitud';
import { Usuario } from 'src/app/Models/usuario';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { SolicitudService } from 'src/app/Service/solicitud.service';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-ingresosolicitud',
  templateUrl: './ingresosolicitud.component.html',
  styleUrls: ['./ingresosolicitud.component.css']
})
export class IngresosolicitudComponent implements OnInit {

  id:number;

  empresas: empresa = new empresa();
  empresa: empresa [] = [];

  usuarios: Usuario = new Usuario();
  usuario: Usuario [] = [];

  solicitudes: solicitud = new solicitud();
  solicitud: solicitud [] = [];

  constructor(private activedRoute: ActivatedRoute, private empresaService: EmpresaService, private solicitudService: SolicitudService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.getEmpresas();
    this.getUsuarios();
    console.log()
    this.activedRoute.params
      .subscribe(params => {
        let idsolicitud: number = params['idsolicitud'];
        console.log(idsolicitud)
        if (idsolicitud) {
          this.solicitudService.obtenerSolicitud(idsolicitud)
            .subscribe(response => this.solicitudes = response)
        }
      })
  }

  getEmpresas() {
    this.empresaService.getEmpresa()
      .subscribe(response => this.empresa = response);
  }

  getUsuarios() {
    this.usuarioService.getUser()
      .subscribe(response => this.usuario = response);
  }

  agregarSolicitud() {
    this.solicitudService.crearSolicitud(this.solicitudes)
      .subscribe(response => {
        console.log('exito');
        console.log(response)
        this.solicitud.push(response);
      });
  }

  cleanModal(){
    this.solicitudes = new solicitud();
  }

  actualizarCatSubEmp() {
    this.solicitudService.updateSolicitud(this.solicitudes)
      .subscribe(response => {
        console.log('actualizado');
       this.solicitud.forEach((resp,index) => {

         if(resp.idsolicitud == response.idsolicitud){
           this.solicitud[index] = response;
         }
       });
        document.getElementById("closeM2").click();
      })
  }

  abrirmodaleditar(catsubemp: solicitud) {
    this.solicitudes = {...catsubemp};

  }


}
