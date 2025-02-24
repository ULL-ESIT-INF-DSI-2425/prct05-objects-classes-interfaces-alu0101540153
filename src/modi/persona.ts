/**
 * clase que representa una persona, con sus datos
 */
export abstract class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _fechaNacimiento: string;
    private _sexo: string;
  
    constructor(nombre: string, apellidos: string, fechaNacimiento: string, sexo: string) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._fechaNacimiento = fechaNacimiento;
      this._sexo = sexo;
    }

    get nombre(): string {
      return this._nombre;
    }
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    get apellidos(): string {
      return this._apellidos;
    }
  
    set apellidos(apellidos: string) {
      this._apellidos = apellidos;
    }
  
    get fechaNacimiento(): string {
      return this._fechaNacimiento;
    }
  
    set fechaNacimiento(fechaNacimiento: string) {
      this._fechaNacimiento = fechaNacimiento;
    }

    get sexo(): string{
      return this._sexo;
    }

    set sexo(sexo: string){
      this._sexo = sexo;
    }
  
    abstract mostrarDatos(): string;
  }
  