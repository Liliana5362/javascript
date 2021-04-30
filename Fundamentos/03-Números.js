//Redondear un numero mas bajo
console.log(Math.floor(45.89))

//redondear numero arriba
console.log(Math.round (45.52))

//obtner el máximo de una lista de números
console.log(`El número máximo es: ${Math.max(56.5,45,90,5)}`);

//obtener el mínimo de una lista de números
console.log(`El número mínimo es: ${Math.min(56.5,45,90,5)}`);

//NaN no es un número
// como obtner entero de un numero

let numero="67.876533"
console.log(numero);
numero=parseInt(numero);
 console.log(parseInt(numero));

// typeof(numero) que tipo de dato tiene la variante
let decimal="456.322456"
console.log(parseFloat(decimal));
// Elevar a la potencia
let base=numero
let exponente=3
console.log(`El número ${base} elevado a la potencia ${exponente} es de ${Math.pow(base, exponente)}`);

//Calcular raíz cuadrada
console.log(Math.sqrt(64));

// Numero Aleatorio
Math.random()
console.log(Math.random());
console.log(Math.round(Math.random() * 10) + 1); //Aleatorio numeros

// Obtner número dos decimales
decimal=parseFloat(decimal)

console.log(Math.round(decimal * 100) /100);

//toFixed (2)
// funciona solo con los string

console.log(decimal.toFixed(2));

let decimalString = parseFloat(decimal.toFixed(3));














