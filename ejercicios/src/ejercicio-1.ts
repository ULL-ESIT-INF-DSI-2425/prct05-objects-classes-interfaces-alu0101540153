// Definimos un tipo para representar un número complejo
type Complejo = {
  real: number;
  imag: number;
};

// Función para sumar dos números complejos
export function add(c1: Complejo, c2: Complejo): Complejo {
  return { real: c1.real + c2.real, imag: c1.imag + c2.imag };
}

// Función para restar dos números complejos
export function sub(c1: Complejo, c2: Complejo): Complejo {
  return { real: c1.real - c2.real, imag: c1.imag - c2.imag };
}

// Función para multiplicar dos números complejos
export function mult(c1: Complejo, c2: Complejo): Complejo {
  return {
    real: c1.real * c2.real - c1.imag * c2.imag,
    imag: c1.real * c2.imag + c1.imag * c2.real
  };
}

// Función para dividir dos números complejos
export function div(c1: Complejo, c2: Complejo): Complejo {
  const denom = c2.real ** 2 + c2.imag ** 2;
  return {
    real: (c1.real * c2.real + c1.imag * c2.imag) / denom,
    imag: (c1.imag * c2.real - c1.real * c2.imag) / denom
  };
}

// Función para calcular el producto escalar de un número complejo con un escalar real
export function prod(c: Complejo, escalar: number): Complejo {
  return { real: c.real * escalar, imag: c.imag * escalar };
}

// Función para calcular el conjugado de un número complejo
export function conj(c: Complejo): Complejo {
  return { real: c.real, imag: -c.imag };
}

// Función para calcular el módulo de un número complejo
export function abs(c: Complejo): number {
  return Math.sqrt(c.real ** 2 + c.imag ** 2);
}

// Pruebas
const c1: Complejo = { real: 3, imag: 4 };
const c2: Complejo = { real: 1, imag: -2 };

console.log("Suma:", add(c1, c2));
console.log("Resta:", sub(c1, c2));
console.log("Multiplicación:", mult(c1, c2));
console.log("División:", div(c1, c2));
console.log("Producto escalar (c1 * 2):", prod(c1, 2));
console.log("Conjugado de c1:", conj(c1));
console.log("Módulo de c1:", abs(c1));
