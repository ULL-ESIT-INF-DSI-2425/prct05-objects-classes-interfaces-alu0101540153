import { Persona } from "./persona";

/**
 * clase estudiante, heredera de persona, que guarda sus datos
 */
export class Estudiante extends Persona {
    private _correoInstitucional: string;
    private _curso:number;
  
    constructor(nombre: string, apellidos: string, fechaNacimiento: string, sexo: string, correoInstitucional: string, curso: number) {
      super(nombre, apellidos, fechaNacimiento, sexo);
      this._correoInstitucional = correoInstitucional;
      this._curso= curso;
    }
  
    get correoInstitucional(): string {
      return this._correoInstitucional;
    }
  
    set correoInstitucional(correoInstitucional: string) {
      this._correoInstitucional = correoInstitucional;
    }

    get curso(): number{
        return this._curso;
    }

    set curso(curso: number){
        this._curso = curso;
    }
  
    mostrarDatos(): string {
      return `# Estudiante: ${this.nombre} ${this.apellidos}, Nacimiento: ${this.fechaNacimiento}, sexo ${this.sexo}, Correo: ${this.correoInstitucional}, Curso ${this.curso}`;
    }
  }
  