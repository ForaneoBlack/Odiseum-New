import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoriaProducto} from 'src/app/Models/categoriaProducto';
import {subcategoriaProducto} from 'src/app/Models/subcategoriaProducto';
import {CategoriaproductoService} from 'src/app/Service/categoriaproducto.service';
import {ProductoService} from 'src/app/Service/producto.service';
import {SubcategoriaproductoService} from 'src/app/Service/subcategoriaproducto.service';
import Swal from 'sweetalert2';
import {Producto} from '../../../../Models/producto';
import {empresa} from '../../../../Models/empresa';
import {EmpresaService} from '../../../../Service/empresa.service';


@Component({
    selector: 'app-listarproducto',
    templateUrl: './listarproducto.component.html',
    styleUrls: ['./listarproducto.component.css']
})
export class ListarproductoComponent implements OnInit {

    productos: Producto = new Producto();
    producto: Producto [] = [];

    categoria: CategoriaProducto [] = [];
    subcategoria: subcategoriaProducto [] = [];
    empresa: empresa [] = [];

    ngOnInit(): void {

        this.getProducto();
        this.getSubcategorias();
        this.getCategorias();
        this.getEmpresas();

        this.activedRoute.params
            .subscribe(params => {
                let idproducto: number = params['idproducto'];
                if (idproducto) {
                    this.productoService.obtenerProducto(idproducto)
                        .subscribe(response => this.productos = response)
                }
            })
    }



    constructor(private modalService: NgbModal, private empresaService: EmpresaService, private subcategoriaService: SubcategoriaproductoService, private categoriaproductoService: CategoriaproductoService, private productoService: ProductoService, private activedRoute: ActivatedRoute, private router: Router) {
    }


    getEmpresas() {
        this.empresaService.getEmpresa()
            .subscribe(response => this.empresa = response);
    }

    getProducto() {
        this.productoService.getProducto()
            .subscribe(response => this.producto = response);
    }

    getCategorias() {
        this.categoriaproductoService.getCategoria()
            .subscribe(response => this.categoria = response);
    }

    getSubcategorias() {
        this.subcategoriaService.getSubcategoria()
            .subscribe(response => this.subcategoria = response);
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

    cleanModal() {
        this.productos = new Producto();
    }

    actualizarProducto() {
        this.productoService.updateProducto(this.productos)
            .subscribe(response => {
                console.log('actualizado');
                this.producto.forEach((resp, index) => {

                    if (resp.idproducto == response.idproducto) {
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

    compararcategoria(o1: CategoriaProducto, o2: CategoriaProducto): boolean {
        if (o1 == undefined && o2 == undefined) return true;
        return o1 == null || o2 == null || o1 == undefined || o2 == undefined ? false : o1.catproid == o2.catproid;

    }

    compararsubcategoria(o1: subcategoriaProducto, o2: subcategoriaProducto): boolean {
        if (o1 == undefined && o2 == undefined) return true;
        return o1 == null || o2 == null || o1 == undefined || o2 == undefined ? false : o1.catsubproid == o2.catsubproid;

    }


}
