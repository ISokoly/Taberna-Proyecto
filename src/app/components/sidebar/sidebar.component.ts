import { Component } from '@angular/core';

import {RouterLink  } from '@angular/router';

import { ProductosComponent } from '../layout/productos/productos.component';
import { ReportesComponent } from '../layout/reportes/reportes.component';
import { VentasComponent } from '../layout/ventas/ventas.component';

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
 
}
