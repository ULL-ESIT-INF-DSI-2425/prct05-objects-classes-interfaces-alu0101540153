import { describe, expect, test } from "vitest";
import { decodeResistor } from "../src/ejercicio-2"; 

describe("decodeResistor", () => {
    test("Devuelve 15 para ['marrón', 'verde']", () => {
      expect(decodeResistor(["marrón", "verde"])).toBe(15);
    });
  
    test("Devuelve 15 para ['marrón', 'verde', 'violeta'] (ignora el tercer color)", () => {
      expect(decodeResistor(["marrón", "verde", "violeta"])).toBe(15);
    });
  
    test("Devuelve 26 para ['rojo', 'azul']", () => {
      expect(decodeResistor(["rojo", "azul"])).toBe(26);
    });
  
    test("Devuelve 48 para ['amarillo', 'gris', 'blanco']", () => {
      expect(decodeResistor(["amarillo", "gris", "blanco"])).toBe(48);
    });
  });