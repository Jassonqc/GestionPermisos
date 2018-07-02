import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//servicios
import { AlumnosService } from '../app/servicios/alumnos.service';

//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment'

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistropermisoComponent } from './componentes/registropermiso/registropermiso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlumnosComponent,
    LoginComponent,
    RegistroComponent,
    RegistropermisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
