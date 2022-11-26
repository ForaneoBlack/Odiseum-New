import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-reporteproductos',
  templateUrl: './reporteproductos.component.html',
  styleUrls: ['./reporteproductos.component.css']
})
export class ReporteproductosComponent implements OnInit {

  productos: Producto = new Producto();
  producto: Producto [] = [];

  constructor(private productoService: ProductoService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProducto();
    this.activedRoute.params
      .subscribe(params => {
        let idproducto: number = params['idproducto'];
        if (idproducto) {
          this.productoService.obtenerProducto(idproducto)
            .subscribe(response => this.productos = response)
        }
      })
  }

  getProducto() {
    this.productoService.getProducto()
      .subscribe(response => this.producto = response);
  }

}
