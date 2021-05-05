//bucle

//while
/*mientras condición
entonces accion*/
let vecesSumar=10;
let totalSuma=0

while(vecesSumar >0){
    totalSuma +=1
    vecesSumar-=1
    console.log(`totalSuma: ${totalSuma} | vecesSumar:${vecesSumar}`)
}

console.log(`total= ${totalSuma}`);

// ----------------------------------
let respuesta="helsinki"
let acierto=false;
let contador=0
while(contador<3 && acierto ===false){
let respUsuario=prompt("Capital de Finlandia")
if(respUsuario.toUpperCase()===respueta){
    acierto=true;
    document.write("Muy bien ACERTASTE")
}
contador++

}
if(acierto ===false ){
    document.write("lo sentimos no la pegaste LOSER")
}




