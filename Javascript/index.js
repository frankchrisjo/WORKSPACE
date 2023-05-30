console.log('Hola Mundo')

// Tipos de datos en javascript:
// String: cadena de caracteres. 'a' se puede utilizar ' y ""
// Boolean: tiene dos valores pueden ser true o false.
// Null: nulo.
// Number: es cual quier numero que queremos escribir en JS, solo escribimos el numero.
// Underfined: es una variable que no esta definido.
// Object: puede agrupar todos los tipos de datos. 

// Defenicion de variables:
// var
// let
// const

//esto que vimos se llama mutabilidad

let miPrimeraVariable= 'Mi primera variable!'
console.log(miPrimeraVariable);

miPrimeraVariable= 'Esto ha cambiado'
console.log(miPrimeraVariable);

//boolean
let miBoolean= true
let miOtroBoolean= false

//number
let miNumber= 0
let miNumber2= 12
let miNumber3= 24
let miNumber4= 48

//console.log(miNumber,miNumber2,miNumber3,miNumber4,miBoolean,miPrimeraVariable);
// la variable siempre tiene que comenzar con una letra
let nulo= null
console.log(nulo,'07',miNumber2);

// objeto
//es una agrupacion de datos estos datos, que  hacen sentido entre si 

//Objeto vacio
const miPrimerObjeto = {}

// objeto
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}

console.log(miObjeto.unString);

// Los arreglos pueden contener elemento de cualquier tipo dentro de el 

// arreglo vacio

const arrVacio = []
//Este ya no es vacio
const arr = [1, 2,'Hola', 'Mundo', miObjeto]

console.log(arrVacio, arr);

// push funciona para agregar un elemento

arr.push(5);
console.log(arr);

// operaciones matematica

const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const division = 3 / 4 

console.log(suma, restar, multiplicar, division);

//const division = 453 / 4 

console.log(division)

//la operacion entrega el restante
const modulo = 10 % 3
console.log(modulo);
// diferente de const vs let, const no deja cambiar el valor de la variable
let num = 5
num++
num++

//console.log(num);

// puedes utilizar para incrementa y tambien para las demas operaciones
num += 3
num -= 2
console.log(num);

//operadores de comparacion
//cuando se utiliza la triple= es para la comparacion sea exacta en toda su magnitud
const resultado1 = 5 === 6
const resultado2 = 5 == '5'
const resultado3 = 5 > 4
const resultado4 = 5 >= 4
const resultado5 = 5 <= 4

const resultado6 = 5 != 4
const resultado7 = 5 !== '4'

console.log(resultado7);

let numer = 7000000;
let porcentaje = 50;

let resultado = (numer*porcentaje)/ 100;

console.log(resultado);

//  operadores logicos son (or ||, and && y not !) 
// El resultado de or va hacer el primer true, no importa cuantos false.
const resultadoOr = false || true

console.log(resultadoOr);

// lo contrario de OR, el and&& buscara el primer false
const resultadoAnd = true && false

console.log(resultadoAnd);
// el operador logino not, va a tener el valor opuesto. 
const resultadoNot = !true

console.log(resultadoNot);

// control de flujo permite realizar interacciones y permite evaluar condiciones

if (true) {
    console.log('estoy dentro de un if');
}

const edad = 10
if (edad > 5 && edad <18) {
    console.log ('el niño pede jugar');
} else {
    console.log('el niño no puede jugar :(');   
}

 //control de flujo:while 
   // let x = 0
    //while (x < 5) {
      //  console.log(x);
      //  x++
    //}
  


//console.log('terminando el loop');

// control de flujo: switch
//let y = 3
//switch (1) {
  // case 1: {
    //console.log('yo soy el caso 1');
   // break;
   
   //case 2: {
   // console.log('yo soy el caso 2');
   // break;
    
  // case 3: 
   // console.log('yo soy el caso 3');
   // break;   
   //default:
    //    console.log('no hay caso');
     //   break;


// control de flujo: for

//for (let i = 0; i < 10; i++ ) {
  //  console.log(i);
//}

//accediendo a los elementos de un arreglo

//const numeros = [1, 2, 3, 'hola mundo', 5]

//console.log (numeros[]); esta funciona es  para poder ingresar al contenido,comienza desde 0 

//for (let i = 0; i < numeros.length; i++ ) {
   // console.log(i);
  // console.log(numeros[i]);
//}

//funciones se puede escribir de dos funciones: function

function iterar (arg1) {
    for (let i = 0; i < arg1.length; i++ ) {
    console.log(arg1[i]);
    }
}
const numeros = [1, 2, 3, 'hola mundo', 5] 
const nombres = ['franklin', 'maria', 'pedro', 'hola mundo', 'ana'] 

iterar(numeros)
iterar(nombres)