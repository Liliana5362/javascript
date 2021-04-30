// Que es una variable 
// es una espacio de memoria donde guardo datos
// como declaro una variable con la palabra reservada VAR
// aqui se declaro una variable y se le asigno un valor

var nombre='Eugenio';
let Apellido= 'Pérez';

// Diferencia entre VAR Y LET
// VAR permite volver a declarar la misma variable en 
// cualquier parte del código

// LET cuando quiera declarar de nuevo una variable con el mismo nombre automáticamente tendre un Error

//const no variar su valor no se le puede asignar un nuevo valor
const pi=3.14;

// Tipos de Datos
//  valores que puedo almacenar en una variable

//String tipos de datos de TEXTO
let cliente='Fabrizio'

//Number tipos de datos Numeros cuando declaramos nros.

let numero1=34;
let numero2=67.25;
let numero3=-24;

// tipos de datos boolean comparar
let comprar=true;
let comer=false;

//null
let billetera=null;

//Undefined
let caja;

// ARRAY Si quiero que una variables tengas varios valores almacenados
let arreglo = ["Pablo", 689, true];

//Object
// contienen propiedades con valores

let persona={
    nombre:'José',
    Apellido:'Mandarino',
    Edad:33,

};

//operadores;
//Aritméticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicación = numero1 * numero2;
let división = numero1 / numero2;
let resto = numero1 % numero2;

//Operadores Unitarios
++numero1;
--numero1;

//Operadores Relacionales
// Son operadores permiten relacional dos valores true o false
numero1 == numero2;
// lo que quier decier numero1 es igual a numero2 resultado false

// numero 1 es mayor o igual a numero dos
 numero1 >= numero2; 
// responde false

// operador si es diferente
 numero1 != numero2; 
// responde true

//Relacionales
console.log (numero1 == numero2);
console.log (numero1 >= numero2);
console.log (numero1 <= numero2);
console.log (numero1 != numero2);
// // console.log mostrar mensaje en la consola
// valores de variables o mensajes en la consola

console.log("el resultado de la suma es" + suma);

// Negacion
let Verdadero = true;
console.log(!verdadero);
// niega el valor de la variable el signo es ! niega








