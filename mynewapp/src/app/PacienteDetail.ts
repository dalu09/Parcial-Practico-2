import { Paciente } from "./paciente";


export class PacienteDetail extends Paciente {
  constructor(
    id: number,
    name: string,
    edad: number,
    diagnostico: string,
    historial: Array<string>

  ) {
    super(id, name, edad, diagnostico, historial);
    
  }
}
