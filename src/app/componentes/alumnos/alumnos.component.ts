import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../servicios/alumnos.service';
import { ToastrService } from 'ngx-toastr';

import { Alumno } from '../../interfaces/registropermiso';
import { element } from 'protractor';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnosList: Alumno[];

  constructor(
    private alumnoService: AlumnosService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.alumnoService.getAlumnos()
      .snapshotChanges()
      .subscribe(item => {
        this.alumnosList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.alumnosList.push(x as Alumno);
        })
      })
  }

  eliminarPermiso($key: string) {
    this.alumnoService.deleteAlumno($key);
    this.toastr.success('', 'Permiso eliminado');
  }
}
