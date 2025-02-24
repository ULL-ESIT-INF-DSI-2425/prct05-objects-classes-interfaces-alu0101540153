import { Estudiante } from "./estudiante";
import { Profesor } from "./profesor";

type notaTup = [Estudiante, number];

/**
 * Clase que representa una asignatura, asiciando profesores a estudiantes y sus respectivas notas
 */
 export class Asignatura {

    private codigo: string;
    private nombre: string;
    private titulacion: string;
    private _profesores: Profesor[] = [];
    private _calificaciones: notaTup[];
  
    constructor(codigo: string, nombre: string, titulacion: string) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.titulacion = titulacion;
    }


    set profesores(profes: Profesor[]){
        this._profesores = profes;
    }
    get profesores(): Profesor[]{
        return this._profesores;
    } 
    addProfesor(profesor: Profesor): void {
        this._profesores.push(profesor);
    }

    get calificaciones(): notaTup[]{
        return this._calificaciones;
    }
    set calificaciones(calificaiones: notaTup[] ){
        this._calificaciones = calificaiones;
    } 
    addCalificacion(estudiante: Estudiante, calificacion: number): void {
            this._calificaciones.push([estudiante, calificacion]);
    }

    mostrarProfesores(): string {
        let salida: string = "";
        this.profesores.forEach((profesor) => {
          salida += profesor.mostrarDatos;
          salida += ";  "
        });
        return salida;
    }

    mostrarEstudiantes(): string {
        let salida: string = "";
        this.calificaciones.forEach((nota) => {
          salida += nota[0].mostrarDatos;
          salida += ";  "
        });
        return salida;
    }

    
    buscarProfesor(nombre: string, correo: string): Profesor | undefined {
        return this.profesores.find(
        (profesor) =>
            profesor.nombre === nombre ||
            profesor.correoInstitucional === correo
        );
    }
    buscarEstudiante(nombre: string, correo: string): notaTup | undefined {
        return this.calificaciones.find(
          (nota) =>
            nota[0].nombre === nombre ||
            nota[0].correoInstitucional === correo
        );
    }

    obtenerEstudiantesPorNota(calificacion: number): Estudiante[] {
        let salida: Estudiante[] = [];
        this.calificaciones.forEach(nota => {
            if( nota[1] === calificacion ){
                salida.push(nota[0]);
            }
        });
        return salida;
    }
}
  

