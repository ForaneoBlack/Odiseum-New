import { Component, OnInit } from '@angular/core';
import { empresa } from 'src/app/Models/empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-crud-empresa',
  templateUrl: './crud-empresa.component.html',
  styleUrls: ['./crud-empresa.component.css']
})
export class CrudEmpresaComponent implements OnInit {

  empresas: empresa[]= [];
  empresaNueva: empresa = new empresa();

  constructor(private modalService: NgbModal, private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas()
    .subscribe(response => this.empresas = response);
  }

  agregarEmpresa(){
    this.empresaService.crearEmpresa(this.empresaNueva)
    .subscribe(response => console.log("exito"))
  }

  delete(){

  }

}
