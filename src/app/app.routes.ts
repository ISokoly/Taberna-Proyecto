import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductosComponent } from './components/layout/productos/productos.component';
import { VentasComponent } from './components/layout/ventas/ventas.component';
import { ReportesComponent } from './components/layout/reportes/reportes.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent,
        title:'Login'

    },
    {
        path:'layout',
        component:LayoutComponent,
        children: [
            {path:'',redirectTo:'productos',pathMatch:'full'},
            { path: 'productos', component: ProductosComponent,title:'Productos' },
            { path: 'ventas', component: VentasComponent,title:'Ventas' },
            { path: 'reportes', component: ReportesComponent,title:'Reportes' }
        ]
    },
];
