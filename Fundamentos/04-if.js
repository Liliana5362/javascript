//ESTRUCTURA DE CONTROL O CONDICIONAL

//If.....else

/*SI SE CUMPLE LA CONDICION ENTONCES REALIZAR LA ACCION 

SI NO SE CUMPLE LA CONDICION ENTONCES HACER OTRA COSA
*/ 
// IF ELSE :SI SE CUMPLE LA CONDICION TIENE QUE SER VERDADERO
// SI NO ES VERDADERA REALIZAMOS OTRAS ACCION
// === tipo de dato como el valor que tiene compara
// == evalua que los valores sean iguales compara valores
// = asigna valores a una variables
// let num=9;
// si se cumple la acción if

// if(num % 2 === 0){
//  console.log("El número es par");   
// acción
// si no se cumple la accion else   
// }else{
// otra acción
// console.warn("El número no es par"); 
// }

// let num = parseInt (prompt ('ingrese un número'));

// if(isNaN(num)){
//     console.log("Ingrese un número")
// }else{
//     if(num==10){
    
//         console.log("El número es igual a 10");
//     }else if(num > 10){
//     console.log("El número es mayor que 10")
//     }else if(num !== 10){
//     console.log(`El valor ${num} es distinto de 10`)
    
//     }
    
//     else{
//     console.log("el numero es menor que 10") ; 
//     }

// }


// NaN no es número

//fiesta
//Solo puede entrar un mayor de edad osea edad>=18
//si no es mayor de edad enbtonces debe ir acompañado de un tutor

 let edad= 15
 let tutor= false

 if(edad >= 18) {
 console.log("Bienvenido a la JODA ");
 }else if (tutor ===true) {
     console.log("Bienvenidos a la JOda no se separe de su tutor");

 }else{
    console.log("Salga de aqui, usted no puede disfrutga de la vida");
 }

if(edad < 18 && tutor === false){
    console.error("salga de aqui, usted no puede disfrutar de la vida");
}else if (edad >=18  || tutor === true) {
    console.log("Bienvenido a la JODA");
}










































