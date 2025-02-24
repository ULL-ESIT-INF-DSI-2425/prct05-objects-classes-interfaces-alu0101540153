import { Persona } from "./persona";


/**
 * clase profesor, heredera de persona, que guarda sus datos
 */
export class Profesor extends Persona {
    private _correoInstitucional: string;
    private _horarioTutorias: string[];

  
    constructor(nombre: string, apellidos: string, fechaNacimiento: string, sexo: string, correoInstitucional: string, horarioTutorias: string[]) {
      super(nombre, apellidos, fechaNacimiento, sexo);
      this._correoInstitucional = correoInstitucional;
      this._horarioTutorias = horarioTutorias;
    }
  
    get correoInstitucional(): string {
      return this._correoInstitucional;
    }
  
    set correoInstitucional(correoInstitucional: string) {
      this._correoInstitucional = correoInstitucional;
    }
  
    get horarioTutorias(): string[] {
      return this.horarioTutorias;
    }

    addTutoria( tuto: string ): void{
        this.horarioTutorias.push(tuto)
    }
    
    set horarioTutorias(horarioTutorias: string[]) {
      this.horarioTutorias = horarioTutorias;
    }
  
    mostrarDatos(): string {
      return `Profesor: ${this.nombre} ${this.apellidos}, sexo ${this.sexo}, Nacido el: ${this.fechaNacimiento}, Correo: ${this.correoInstitucional}, Horario de Tutorías: ${this.horarioTutorias}`;
    }
  }
  