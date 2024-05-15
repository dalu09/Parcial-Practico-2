export class Paciente {
    name: string;
    edad: number;
    diagnostico: string;
    historial: Array<string> = [];

    public constructor(name: string, edad: number, diagnostico: string, historial:Array<string>) {
      this.name = name;
      this.edad = edad;
      this.diagnostico = diagnostico;
      this.historial = historial;
    }
  }