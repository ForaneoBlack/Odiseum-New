import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoriaservicio } from 'src/app/Models/categoriaservicio';
import { empresa } from 'src/app/Models/empresa';
import { EmpresaLogin } from 'src/app/Models/empresalogin';
import { Servicio } from 'src/app/Models/servicio';
import { Subcategoriaservicio } from 'src/app/Models/subcategoriaservicio';
import { CategoriaservicioService } from 'src/app/Service/categoriaservicio.service';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { ServicioService } from 'src/app/Service/servicio.service';
import { SubcategoriaservicioService } from 'src/app/Service/subcategoriaservicio.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrls: ['./listar-servicio.component.css']
})
export class ListarServicioComponent implements OnInit {
  public datos:EmpresaLogin=new EmpresaLogin();
  id:number;
  idemp:number;
  public nombre: string;
  servicios: Servicio = new Servicio();
  servicio: Servicio [] = [];
  empresas: empresa = new empresa();

  categoria: Categoriaservicio [] = [];
  subcategoria: Subcategoriaservicio [] = [];
  empresa : empresa [] = [];

  ngOnInit(): void {

    
    this.getSubcategorias();
    this.getCategorias();
    this.getEmpresas();
    this.datos=JSON.parse(sessionStorage['usuario']);
    this.id=this.datos.idempresa;
    this.idemp=this.datos.usu_id.usu_id;
    this.nombre=this.datos.empnombre;
    this.obetenerempresa( this.id);
    console.log(this.nombre);
    this.obetenerservicio( this.id);
    console.log(this.obetenerservicio(this.id));

    this.activedRoute.params
      .subscribe(params => {
        let idservicio: number = params['idservicio'];
        if (idservicio) {
          this.servicioservice.obtenerServicio(idservicio)
            .subscribe(response => this.servicios = response)
        }
      })
  }


  constructor(private modalService: NgbModal,private empresaService:EmpresaService, private subcategoriaService: SubcategoriaservicioService, private categoriaService: CategoriaservicioService , private servicioservice: ServicioService, private activedRoute: ActivatedRoute, private router: Router) {
  }
  getEmpresas() {
    this.empresaService.getEmpresa()
      .subscribe(response => this.empresa = response);
  }
  obetenerempresa(idempresa: number){
    this.empresaService.obtenerEmpresa(idempresa)
    .subscribe(response => {
        this.empresas = response
        console.log(response)
    });

}

  obetenerservicio(usu_id: number){
    this.servicioservice.obtenerServicioempresa(usu_id)
    .subscribe(response => {
        this.servicio = response
        console.log(response)
    });

}

  
  getCategorias() {
    this.categoriaService.getServicio()
      .subscribe(response => this.categoria = response);
  }
  getSubcategorias() {
    this.subcategoriaService.getSubcategoria()
      .subscribe(response => this.subcategoria = response);
  }


  agregarServicio() {
    this.servicioservice.crearServicio(this.servicios)
      .subscribe(response => {
        console.log('exito');
        console.log(response)
        this.servicio.push(response);
        document.getElementById("closeM1").click();

      });
  }

  cleanModal(){
    this.servicios = new Servicio();
  }
  actualizarServicio() {
    this.servicioservice.updateServicio(this.servicios)
      .subscribe(response => {
        console.log('actualizado');
       this.servicio.forEach((resp,index) => {

         if(resp.idservicio == response.idservicio){
           this.servicio[index] = response;
         }
       });
        document.getElementById("closeM2").click();
      })
  }

  abrirmodaleditar(servicio: Servicio) {
    this.servicios = {...servicio};

  }


  public delete(servicio: Servicio): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de eliminar!',
      text: `El servicio : ${servicio.sernombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        //funcion eliminar
        this.servicioservice.eliminar(servicio).subscribe(data => {
          this.servicio = this.servicio.filter(del => del.idservicio != servicio.idservicio)
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            `Servicio eliminado ${servicio.sernombre}`,
            'success'
          );

        })


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          ' ',
          'error'
        )
      }
    })
  }

  compararcategoria(o1: Categoriaservicio, o2: Categoriaservicio): boolean{
    if(o1==undefined && o2 == undefined)return true;
    return o1 == null || o2 ==null || o1 == undefined || o2 == undefined ? false : o1.idcatser == o2.idcatser;

  }
  compararsubcategoria(o1: Subcategoriaservicio, o2: Subcategoriaservicio): boolean{
    if(o1==undefined && o2 == undefined)return true;
    return o1 == null || o2 ==null || o1 == undefined || o2 == undefined ? false : o1.idsubcat == o2.idsubcat;

  }

}
