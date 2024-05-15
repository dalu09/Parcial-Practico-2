import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { dataPacientes } from './dataPaciente';
import { PacienteService } from './paciente.paciente'

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  Paciente: Array<Paciente> = [];

  constructor(private pacienteService: PacienteService) { }

  getCourseList() {
    this.pacienteService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  ngOnInit() {
    this.getCourseList();
  }

}
