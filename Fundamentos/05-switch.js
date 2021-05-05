//Estructura condicional
//Switch evalua el valor de una variable en distintas opciones que pueden surgir y toma un accion
// El swith recibe un valor se evalua el valor de esa variable se evalue con case

let numero=1000
switch (numero) {
    case 10:
        //accion
        console.log("el numero es 10");
        break;
case 25:
//accion
console.log("el numero es 25");
break;

case 3:
//accion
console.log("el numero es 3");
break;


    default:
        console.log("El número es de otro valor");
//accion
        break;
}
//-------------------------------------------
let diaNumero=new Date().getDay()

switch (diaNumero) {
    case 0:
        console.log("hoy es domingo")
        
        break;
        case 0:
            console.log("hoy es domingo")
            
            break;
            case 1:
        console.log("hoy es lunes")
        
        break;

        case 2:
        console.log("hoy es Martes")
        
        break;
        case 3:
        console.log("hoy es Miercoles")
        
        break;
        case 4:
        console.log("hoy es Jueves")

        case 5:
        console.log("hoy es Viérnes")
        
        break;
    


    default:
        console.log("hoy es Sábado");
        break;
}



// / ----------------------------------------
let num=68
switch (true)
 {
    case num === 10:
    console.log("El número es iguala 10");    
        break;
        case num % 2===0:
            console.log("El número es par");    
                break;
    default:
        console.log("No se que más hacer")
        break;
}

// ---------------------------------
let comando=prompt("Ingrese un comando (alerta, consola, print)")

switch (comando) {
    case "alerta":
        alert("usando swith en un alert")
        break;
        case "consola":
            console.log("usando swith en consola")
            break; 

case "print":
            document.write("usando swith en el navegador")
            break; 
               
    default:
        console.error("no existe ese comando, no sea mala personal")
        break;
}

































