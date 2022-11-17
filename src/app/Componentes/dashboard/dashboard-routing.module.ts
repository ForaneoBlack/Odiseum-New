import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {InicioComponent} from "./inicio/inicio.component";
import {RolComponent} from "./rol/rol.component";
import { ListacategoriaempresaComponent } from './Categorias/listacategoriaempresa/listacategoriaempresa.component';
import { DetallescategoriaempresaComponent } from './Categorias/detallescategoriaempresa/detallescategoriaempresa.component';
import { CrudEmpresaComponent } from './Empresa/crud-empresa/crud-empresa.component';
import { DatosEmpresaComponent } from './Empresa/datos-empresa/datos-empresa.component';
import { ListarproductoComponent } from './Productos/listarproducto/listarproducto.component';
import { ListarServicioComponent } from './Servicio/listar-servicio/listar-servicio.component';
import { ListausuariosComponent } from './Usuario/listausuarios/listausuarios.component';
import { IngresosolicitudComponent } from './Solicitud/ingresosolicitud/ingresosolicitud.component';
import { SolicitudregistroComponent } from './Solicitud/solicitudregistro/solicitudregistro.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
      {path:'inicio',component:InicioComponent},
      {path:'rol',component:RolComponent},
      {path:'listacategoria',component:ListacategoriaempresaComponent},
      {path:'detallescategoria',component:DetallescategoriaempresaComponent},
      {path:'listaempresa',component:CrudEmpresaComponent},
      {path:'formempresa',component:DatosEmpresaComponent},
      {path:'listaproductos',component:ListarproductoComponent},
      {path:'listaservicio',component:ListarServicioComponent},
      {path:'listausuario',component:ListausuariosComponent},
      {path:'ingresosolicitud',component:IngresosolicitudComponent},
      {path:'solicitudregistro',component:SolicitudregistroComponent}


    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
