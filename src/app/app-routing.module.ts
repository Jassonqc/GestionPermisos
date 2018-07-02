import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { patch } from 'webdriver-js-extender';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { RegistropermisoComponent } from './componentes/registropermiso/registropermiso.component';

const routes: Routes = [
 {path: '', component: RegistropermisoComponent},
 {path: 'registro', component: RegistroComponent},
 {path: 'alumnos', component:AlumnosComponent},
 {path: 'registro-permiso', component:RegistropermisoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

