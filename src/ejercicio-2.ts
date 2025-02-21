export const colorMap: Record<string, number> = {
    negro: 0,
    marrón: 1,
    rojo: 2,
    naranja: 3,
    amarillo: 4,
    verde: 5,
    azul: 6,
    violeta: 7,
    gris: 8,
    blanco: 9,
  };
  
export function decodeResistor(colors: string[]): number | undefined{
  if (colors.length < 2) {
      return undefined;
  }

  const firstDigit = colorMap[colors[0].toLowerCase()];
  const secondDigit = colorMap[colors[1].toLowerCase()];

  if (firstDigit === undefined || secondDigit === undefined) {
      return undefined;
  }

  return firstDigit * 10 + secondDigit;
}
  
  // Pruebas
  console.log(decodeResistor(["marrón", "verde"])); // 15
  console.log(decodeResistor(["marrón", "verde", "violeta"])); // 15
  console.log(decodeResistor(["rojo", "azul"])); // 26
  console.log(decodeResistor(["amarillo", "gris", "blanco"])); // 48
  