import { describe, expect, test } from "vitest";
import { add, sub, mult, div, prod, conj, abs } from "../src/ejercicio-1"; 

type Complejo = { real: number; imag: number };

describe("Operaciones con números complejos", () => {
  const c1: Complejo = { real: 3, imag: 4 };
  const c2: Complejo = { real: 1, imag: -2 };

  test("Suma de complejos", () => {
    expect(add(c1, c2)).toEqual({ real: 4, imag: 2 });
  });

  test("Resta de complejos", () => {
    expect(sub(c1, c2)).toEqual({ real: 2, imag: 6 });
  });

  test("Multiplicación de complejos", () => {
    expect(mult(c1, c2)).toEqual({ real: 11, imag: -2 });
  });

  test("División de complejos", () => {
    expect(div(c1, c2)).toEqual({ real: -1, imag: 2 });
  });

  test("Producto escalar de un complejo", () => {
    expect(prod(c1, 2)).toEqual({ real: 6, imag: 8 });
  });

  test("Conjugado de un complejo", () => {
    expect(conj(c1)).toEqual({ real: 3, imag: -4 });
  });

  test("Módulo de un complejo", () => {
    expect(abs(c1)).toBeCloseTo(5);
  });
});