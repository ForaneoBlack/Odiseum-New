import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/Service/producto.service';
import Swal from 'sweetalert2';
import { Producto } from '../../../../Models/producto';

@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.component.html',
  styleUrls: ['./listarproducto.component.css']
})
export class ListarproductoComponent implements OnInit {

  productos: Producto = new Producto();
  producto: Producto [] = [];

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


  constructor(private modalService: NgbModal, private productoService: ProductoService, private activedRoute: ActivatedRoute, private router: Router) {
  }

  getProducto() {
    this.productoService.getProducto()
      .subscribe(response => this.producto = response);
  }


  agregarProducto() {
    this.productoService.crearProducto(this.productos)
      .subscribe(response => {
        console.log('exito');
        console.log(response)
        this.producto.push(response);
        document.getElementById("closeM1").click();

      });
  }

  cleanModal(){
    this.productos = new Producto();
  }
  actualizarCategoria() {
    this.productoService.updateProducto(this.productos)
      .subscribe(response => {
        console.log('actualizado');
       this.producto.forEach((resp,index) => {

         if(resp.idproducto == response.idproducto){
           this.producto[index] = response;
         }
       });
        document.getElementById("closeM2").click();
      })
  }

  abrirmodaleditar(producto: Producto) {
    this.productos = {...producto};

  }


  public delete(producto: Producto): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de eliminar!',
      text: `la categoria : ${producto.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        //funcion eliminar
        this.productoService.eliminar(producto).subscribe(data => {
          this.producto = this.producto.filter(del => del.idproducto != producto.idproducto)
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            `Categoría eliminada ${producto.idproducto}`,
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


}
