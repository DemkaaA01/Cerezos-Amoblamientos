import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InformacionUtilComponent } from './pages/informacion_util/informacion-util.component';
import { ShowroomComponent } from './pages/showroom/showroom.component';
import { ProductosComponent } from './pages/productos/productos.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'empresa', component: InformacionUtilComponent },
  { path: 'showroom', component: ShowroomComponent },

  { path: 'productos/:categoria', component: ProductosComponent },


  { path: 'productos', component: ProductosComponent },
  { path: '**', redirectTo: '' }
];
