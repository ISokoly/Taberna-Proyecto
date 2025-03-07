import { Component } from '@angular/core';

import {RouterLink  } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent    {
  isSidebarOpen: boolean = false;
  
  
  openSidebar() {
    this.isSidebarOpen = true;
  };

  closeSidebar() {
    this.isSidebarOpen = false;
  };
 
  array:any[]=[{label:"Productos", rutas:'productos'}, {label:"Categorias", rutas:'categorias'}, {label:"Marcas", rutas:'marcas'}, {label:"Ventas", rutas:'ventas'}, {label:"Reportes", rutas:'reportes'}]

}
