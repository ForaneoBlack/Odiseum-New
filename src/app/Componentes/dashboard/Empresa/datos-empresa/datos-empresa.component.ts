import { Component, OnInit } from "@angular/core";
import { EmpresaService } from "src/app/Service/empresa.service";
import { empresa } from "src/app/Models/empresa";

@Component({
  selector: "app-datos-empresa",
  templateUrl: "./datos-empresa.component.html",
  styleUrls: ["./datos-empresa.component.css"],
})
export class DatosEmpresaComponent implements OnInit {
  empresaNueva: empresa = new empresa();

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {}

  agregarEmpresa() {
    this.empresaService
      .crearEmpresa(this.empresaNueva)
      .subscribe((response) => console.log("exito"));
  }
}
