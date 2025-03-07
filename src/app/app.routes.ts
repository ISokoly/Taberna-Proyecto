import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { VentasComponent } from './components/layout/ventas/ventas.component';
import { ReportesComponent } from './components/layout/reportes/reportes.component';
import { CategoriaComponent } from './components/layout/productos/categoria/categoria.component';
import { MarcaComponent } from './components/layout/productos/marca/marca.component';
import { ProductoComponent } from './components/layout/productos/producto/producto.component';


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
            { path: 'productos', component: ProductoComponent,title:'Productos' },
            { path: 'categorias', component: CategoriaComponent,title:'Categorias' },
            { path: 'marcas', component: MarcaComponent,title:'Marcas' },
            { path: 'ventas', component: VentasComponent,title:'Ventas' },
            { path: 'reportes', component: ReportesComponent,title:'Reportes' }
        ]
    },
];