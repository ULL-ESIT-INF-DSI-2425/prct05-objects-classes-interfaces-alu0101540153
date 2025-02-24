import { describe, expect, test } from "vitest";
import { Asignatura } from '../src/modi/asignatura';
import { Profesor } from '../src/modi/profesor';
import { Estudiante } from '../src/modi/estudiante';

describe('Asignatura', () => {
  let asignatura: Asignatura;
  let profesor: Profesor;
  let estudiante: Estudiante;
  //let estudiante2: Estudiante;

    asignatura = new Asignatura('CS101', 'DSI', 'ingenieria informatica');
    profesor = new Profesor('Juan', 'Gómez', '1980-02-01', 'Masculino', 'juan@ull.edu.es', ['Lunes 10-12']);
    estudiante = new Estudiante('victor', 'Rodriguez', '1997-07-10', 'Masculino', 'alu0101540153@ull.edu.es', 3);
    //estudiante2 = new Estudiante('alejandro', 'Rodriguez', '1997-07-10', 'Masculino', 'alu0101546153@ull.edu.es', 3);


  test('agregar un profesor a la asignatura', () => {
    asignatura.addProfesor(profesor);
    expect(asignatura.profesores).toBe([profesor]);
  });

  test('agregar un estudiante y calificación', () => {
    asignatura.addCalificacion(estudiante, 8.5);
    expect(asignatura.calificaciones).toBe([estudiante, 8.5]);
  });

  test('profesores correctamente', () => {
    asignatura.addProfesor(profesor);
    expect(asignatura.mostrarProfesores()).toBe('Profesor: Juan Gómez');
  });

  test('estudiantes correctamente', () => {
    asignatura.addCalificacion(estudiante, 8.5);
    expect(asignatura.mostrarEstudiantes()).toBe('Estudiante: Luis Fernández');
  });

  test('buscar un profesor', () => {
    asignatura.addProfesor(profesor);
    const foundProfesor = asignatura.buscarProfesor('Juan', 'juan@universidad.com');
    expect(foundProfesor).toBe(profesor);
  });

  test(' buscar un estudiante', () => {
    asignatura.addCalificacion(estudiante, 8.5);
    const foundEstudiante = asignatura.buscarEstudiante('Luis', 'luis@universidad.com');
    expect(foundEstudiante).toBe([estudiante, 8.5]);
  });

  test('obtener estudiantes', () => {
    asignatura.addCalificacion(estudiante, 8.5);
    const estudiantes = asignatura.obtenerEstudiantesPorNota(8.5);
    expect(estudiantes).toBe(estudiante);
  });
});
