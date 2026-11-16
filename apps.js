let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "salchichas";
listaDeSuper[2] = "pan lactal";

listaDeSuper.push("pan de pancho", "queso") 
listaDeSuper.unshift("fideos", "soda")

console.log(listaDeSuper.length)

let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length)

console.log(listaDeSuper);
console.log("La cantidad de elementos dentro del array es: " + listaDeSuper.length);
console.log("El primer elemento del array es: " + listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log("El último elemento del array es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);

function logItems(arreglo) {
  arreglo.forEach(function(elemento) {
    console.log(elemento);
  });
}
let terraza = ["maceta", "tierra", "arena"];

console.log("Lista de Súper");
logItems(listaDeSuper);

console.log("terraza");
logItems(terraza);

let opcion = "";

while (opcion !== "salir") {
  opcion = prompt('Escribí un comando: "nuevo", "listar", "borrar" o "salir"');

  if (opcion === "nuevo") {
    let item = prompt("¿Qué producto querés agregar?");
    listaDeSuper.push(item);
  } else if (opcion === "listar") {
    logItems(listaDeSuper);
  } else if (opcion === "borrar") {
    let indice = Number(prompt("¿Qué número de producto querés borrar?"));
    if (indice >= 0 && indice < listaDeSuper.length) {
      let borrado = listaDeSuper.splice(indice, 1);
      console.log("Se borró: " + borrado[0]);
    } else {
      console.log("Ese número no existe en la lista");
    }
  } else if (opcion !== "salir") {
    console.log("Comando no válido");
  }
}

console.log("Programa finalizado");
