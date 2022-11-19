import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaProducto } from 'src/app/Models/categoriaProducto';
import { CategoriaproductoService } from 'src/app/Service/categoriaproducto.service';

@Component({
  selector: 'app-detallescategoriaproducto',
  templateUrl: './detallescategoriaproducto.component.html',
  styleUrls: ['./detallescategoriaproducto.component.css']
})
export class DetallescategoriaproductoComponent implements OnInit {

  id:number;
  categorias: CategoriaProducto = new CategoriaProducto();
  categoria: CategoriaProducto [] = [];

  constructor(private activedRoute: ActivatedRoute, private categoriaproductoService:CategoriaproductoService) { }

  ngOnInit(): void {
    this.getCategorias();
    console.log()

    this.activedRoute.params
      .subscribe(params => {
        let catproid: number = params['subcatproid'];
        console.log(catproid)
        if (catproid) {
          this.categoriaproductoService.obtenerCategoria(catproid)
            .subscribe(response => this.categorias = response)
        }
      })
  }
  getCategorias() {
    this.categoriaproductoService.getCategoria()
      .subscribe(response => this.categoria = response);
  }

}
