//Aun no puedo resolver el error.

let multiply = (val1: number, val2: number) => number;
let capitalize = (val: string) => string;

multiply = function (val1: number, val2: number) {
  return val1 * val2;
};

capitalize = function (val: string) {
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};

console.log("[Ejercicio 3.6]", capitalize(`habil ${multiply(5, 10)}`));
