import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Alumno } from '../interfaces/registropermiso';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnosList: AngularFireList<any>;
  selectedAlumno: Alumno=new Alumno();

  constructor(private firebase: AngularFireDatabase) { }

  getAlumnos() {
    return this.alumnosList = this.firebase.list('alumnos');
  }

  insertAlumno(alumno: Alumno) {
    this.alumnosList.push({

      nombre: alumno.nombre,
      codigo: alumno.codigo,
      telefono: alumno.telefono,
      nmropieza: alumno.nmropieza,
      permisode: alumno.permisode,
      fecha: alumno.fecha
    });
  }

  updateAlumno(alumno: Alumno) {
    this.alumnosList.update(alumno.key$, {

      nombre: alumno.nombre,
      codigo: alumno.codigo,
      telefono: alumno.telefono,
      nmropieza: alumno.nmropieza,
      permisode: alumno.permisode,
      fecha: alumno.fecha
    });
  }

  deleteAlumno($key: string){
    this.alumnosList.remove($key);
  }
  
}

