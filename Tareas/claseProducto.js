// Escribe una clase Producto para crear objetos.
// Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.


class Producto {
  constructor(codigo,nombre, precio){
    this.codigo= codigo;
    this.nombre= nombre;
    this.precio= precio;
  }  
mostrar(){
  console.log(`Codigo de Producto:  ${this.codigo},  Nombre de Producto:  ${this.nombre}, Precio de Producto:  ${this.precio}`);
  document.write(`Codigo de Producto:  ${this.codigo}   <br>  Nombre de Producto:  ${this.nombre}  <br> Precio de Producto:  ${this.precio}  <br>`);
}

}

let listadoProductos = [Producto1, Producto2, Producto3];

for (let i = 0; i < listadoProductos.length; i++) {
  const element = listadoProductos[i];
  element.comprar();
}
let Producto1 = new Producto (1, "leche", "1000");
let Producto2 = new  Producto(2, "Mantequilla", "750");
let Producto3 = new  Producto(3, "Yoghurt", "600");

