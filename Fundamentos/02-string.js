let nombre='Eugenio'
let apellido='González'
let frase= "       Bienvenido a la clase    "

//concatenar
console.log(nombre, apellido);
console.log(nombre+' '+apellido);

//Template String concatenar
console.log(`Mi nombre es ${nombre} ${apellido}`);


//Métodos con los String cuando pongo punto me indica 
// Mayusculas
// cuantos caracteres tiene su apellido
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(apellido.length);
console.log(nombre.charAt(4));
console.log(apellido.substr(2, 3));//parámetros de subsgtr (posición,cantidad de caracteres a mostrar)
console.log(frase.trim());
 frase=frase.trim() //elimina espacio adelante de la palabra y atras
//traer la ultima letra del apellido
console.log(apellido.charAt(apellido.length-1));







