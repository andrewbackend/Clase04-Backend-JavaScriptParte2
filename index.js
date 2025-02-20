//Declaración de Funciones

/*
Crea una función que imprima en consola el mensaje "Bienvenidos, a todos". Luego,
llámala para verificar funciona correctamente.
*/


function mostrarMensaje (){
    console.log("Bienvenidos al curso de JS");
}

mostrarMensaje();

console.log("=================================")
//Función con Parámetros

/*
Crea una función que reciba el ancho y alto de un rectángulo y devuelva su área
*/

function calcularAreaRectangulo (ancho, alto){
    return ancho * alto;
}

console.log(calcularAreaRectangulo(5, 10)); //50

console.log("=================================")


//Funciones con valores predeterminados

/*
Crea una función que reciba un parámetro nombre y muestre "Hola, [nombre]". Si no se
proporciona ningun nombre, debe mostrar "Hola, invitado".
*/

function saludar(nombre = "invitdo"){
    console.log(`Hola, ${nombre}`);
}

// saludar("Andrew"); //Hola, Andrew
saludar(); //Hola, invitado

console.log("=================================")
//Funciones Anónimas

/*
Crea una función anónima que calcule el cuadrado de un número y asígnala a una 
variable llamada cuadrado.
*/

const cuadrado = function(numero){
    return numero * numero;
};

console.log(cuadrado(6));

//FUNCIONES DE FLECHA 

/*
Crea un función que reciba un número y devuelva el doble de su valor
*/

const dobleNumero = num => num * 2;
console.log(dobleNumero(28));


console.log("=================================")
//FUNCIONES DE ORDEN SUPERIOR 

/*
Crea una función que reciba dos números y una función que realice una operación 
matemática entre ellos. Luego, usa esta función para sumar y multiplicar.
*/

function operacion(a, b, operar){
    return operar(a, b); 
    //undefined
}

const suma = (x,y) => x + y;
const multiplicacion = (x, y) => x * y;

console.log(operacion(7, 8, suma));
console.log(operacion(7, 8, multiplicacion));

console.log("=================================")
//FUNCION RECURSIVA

/*
Crea una función recursiva que reciba un número e imprima en consola la
cuenta regresiva hasta 1.
*/

function cuentaRegresiva(numero){
    if (numero <=0) return;
    console.log(numero);
    cuentaRegresiva(numero - 1);
}
cuentaRegresiva(8);

console.log("=================================")
//FUNCIONES COMO MÉTODOS EN UN OBJETO

/*
Crea un objeto auto con una propiedad marca y un método que imprima la marca del
auto.
*/

const auto = {
    marca: "Toyota",
    mostrarMarca: function(){
        console.log(`La marca del auto es ${this.marca}`);
    }
};
auto.mostrarMarca();

//FUNCIONES COMO CALLBACK

/*
Crea una función que reciba un mensaje y una función callback. La función debe 
imprimir el mensaje y luego ejecutar la función callback
 */

function ejecutarTarea(mensaje, callback){
    console.log(mensaje);
    setTimeout(callback, 2000); //Simula una descarga de 2 segundos
}

ejecutarTarea("Descargando archivo ...", () => {
    console.log("Descarga completada. :D");
});

    //Usar un tercer parámetro para manejar fallos

