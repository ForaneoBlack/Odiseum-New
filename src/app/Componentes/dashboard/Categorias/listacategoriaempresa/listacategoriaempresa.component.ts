import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/Models/categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listacategoriaempresa',
  templateUrl: './listacategoriaempresa.component.html',
  styleUrls: ['./listacategoriaempresa.component.css']
})
export class ListacategoriaempresaComponent implements OnInit {
  id_categoria:number;
  categorias : Categoria = new Categoria();
  categoria:Categoria[] =[];
  constructor(private categoriaServicio:CategoriaService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }
  private obtenerCategorias(){
    this.categoriaServicio.obtenerListaDeCategoria().subscribe(dato => {
      this.categoria = dato;
    });
  }
  guardarCategoria(){
    this.categoriaServicio.registrarCategoria(this.categorias).subscribe(dato => {
      console.log(dato)
      window.location.reload()

    },error => console.log(error));
  }
  public Editar(): void {
    this.categoriaServicio.editar(this.categorias).subscribe(dato => {
      console.log(dato)


    },error => console.log(error));
  }
  onSubmit(){
    this.guardarCategoria();

  }
  abrirmodaleditar(categoria:Categoria){
    this.categorias=categoria;
  }

  abrirmodalagregar(categoria:Categoria){
    this.categorias=null;

  }
  cargarDatos(): void{
    this.id_categoria = this.route.snapshot.params['id_categoria'];
    this.categoriaServicio.getcategoriaporid(this.id_categoria).subscribe(dato =>{
      this.categorias = dato;
    },error => console.log(error));
  }

  }

