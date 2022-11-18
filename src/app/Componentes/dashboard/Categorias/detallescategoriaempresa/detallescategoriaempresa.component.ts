import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Models/categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detallescategoriaempresa',
  templateUrl: './detallescategoriaempresa.component.html',
  styleUrls: ['./detallescategoriaempresa.component.css']
})
export class DetallescategoriaempresaComponent implements OnInit {
  id:number;
  categorias: Categoria = new Categoria();
  categoria: Categoria [] = [];
  constructor(private activedRoute: ActivatedRoute, private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.getCategorias();
    console.log()

    this.activedRoute.params
      .subscribe(params => {
        let idcatemp: number = params['idcatemp'];
        console.log(idcatemp)
        if (idcatemp) {
          this.categoriaService.obtenerCategoria(idcatemp)
            .subscribe(response => this.categorias = response)
        }
      })


  }
  getCategorias() {
    this.categoriaService.getCategoria()
      .subscribe(response => this.categoria = response);
  }
}


