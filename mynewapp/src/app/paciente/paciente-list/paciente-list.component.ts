import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { PacienteDetail } from '../../PacienteDetail';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  books: Array<PacienteDetail> = []; 
  selected: Boolean = false;
  selectedBook!: PacienteDetail;
  
  constructor(private PacienteService: PacienteService) { }

  ngOnInit() {
    this.getPacientes();
  }

  onSelected(paciente: PacienteDetail): void {
    this.selected = true;
    this.selectedPaciente = paciente;
  }
}