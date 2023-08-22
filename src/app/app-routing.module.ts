import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  { 
    path:'listado-mascotas',
    component: ListadoMascotasComponent

  },

  {
    path: 'agregar-editar-mascota',
    component: AgregarEditarMascotaComponent
  },
  {
    path: 'agregar-editar-mascota/:id',
    component: AgregarEditarMascotaComponent
  },
  {
    path: 'editar-mascota/:id',
    component: AgregarEditarMascotaComponent

  },
  {
    path: 'ver-mascota',
    component: VerMascotaComponent
  },
  {
    path: 'ver-mascota/:id',
    component: VerMascotaComponent
  },
 
  {
    path: '',
    redirectTo : 'listado-mascotas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo : 'listado-mascotas',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
