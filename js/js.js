//Ingresando uno o mas datos.

let ingresarDatos;
ingresarDatos = prompt("Ingresar nombre del estudiante");

alert("Bienvenido a este sitio " + ingresarDatos);
console.log(ingresarDatos);



let ingresarEdad = prompt("¿Que edad tenes?");
let edadNumero = parseInt(ingresarEdad);

if(edadNumero < 18 ){
    alert("Sos menor de edad.");
}else if (edadNumero >= 18 && edadNumero < 65){
    alert("Sos adulto.");
}else{
    alert("Sos mayor de edad.");
}
console.log(ingresarEdad);

//Operaciones matematicas.

/*
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let resultado = num1 + num2;
alert("El resultado de la suma es: " + resultado);
*/

alert("Aprete el boton para realizar la suma");
function suma(){
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let resultado = num1 + num2;
    alert("El resultado de la suma es: " + resultado);
    console.log(resultado);
}

