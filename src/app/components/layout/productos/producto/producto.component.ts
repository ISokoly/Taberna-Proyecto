import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { CategoriaComponent } from "../categoria/categoria.component";
import { MarcaComponent } from "../marca/marca.component";

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  cancelEditProducto() {
    this.selectedProducto = null;
    this.formData = { 
      nombre: '', 
      descripcion: '', 
      precio: 0, 
      id_categoria: '', 
      id_marca: '' 
    };
  }
  productos: any[] = [];
  categorias: any[] = [];
  marcas: any[] = [];
  formData = { nombre: '', descripcion: '', precio: 0, id_categoria: '', id_marca: '' };
  selectedProducto: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProductos();
    this.loadCategorias();
    this.loadMarcas();
  }

  loadProductos(): void {
    this.apiService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  loadCategorias(): void {
    this.apiService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  loadMarcas(): void {
    this.apiService.getMarcas().subscribe(data => {
      this.marcas = data;
    });
  }

  saveProducto(): void {
    if (this.selectedProducto) {
      this.apiService.updateProducto(this.selectedProducto.id, this.formData).subscribe(() => {
        this.loadProductos();
        this.resetForm();
      });
    } else {
      this.apiService.createProducto(this.formData).subscribe(() => {
        this.loadProductos();
        this.resetForm();
      });
    }
  }

  editProducto(producto: any): void {
    this.selectedProducto = producto;
    this.formData = { ...producto };
  }

  deleteProducto(id: number): void {
    this.apiService.deleteProducto(id).subscribe(() => {
      this.loadProductos();
    });
  }

  resetForm(): void {
    this.formData = { nombre: '', descripcion: '', precio: 0, id_categoria: '', id_marca: '' };
    this.selectedProducto = null;
  }
}