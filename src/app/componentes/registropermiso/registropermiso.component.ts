import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import { Alumno } from '../../interfaces/registropermiso';


import { AlumnosService } from '../../servicios/alumnos.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registropermiso',
  templateUrl: './registropermiso.component.html',
  styleUrls: ['./registropermiso.component.css']
})
export class RegistropermisoComponent implements OnInit {

  constructor(
    private alumnosService:AlumnosService,
    private toast:ToastrService
  ) { }

  ngOnInit() {
    this.alumnosService.getAlumnos();
    this.reset();
  }

  guardar(forma:NgForm){
    this.alumnosService.insertAlumno(forma.value);
    this.reset(forma);
    this.toast.success('','Permiso guardado')
  }

  reset(forma?:NgForm){
    if(forma != null)
    forma.reset();
    this.alumnosService.selectedAlumno = new Alumno();
  }

}
