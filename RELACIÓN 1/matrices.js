/*
Pido tam de matriz al usuario (N)
Creo una matriz NxN con numeros aleatorios entre N y N*2

A) Obtener el numero mayor de la matriz y mostrarlo
B) Mostrar la matriz por consola en filas y columnas.
C) Sumar todos los elementos de la matriz y mostrar por pantalla
D) Aplicar Fizz-Buzz en los elementos de la matriz y devolver otra matriz con los cambios
    (Si num es multiplo de 3 --- FIZZ)
    (Si num es multiplo de 5 --- BUZZ)
    (Si num es multiplo de 5 y 3 --- FIZZBUZZ)
*/

let tamaño;

do{
    tamaño = parseInt(prompt("Tamaño de la matriz maquina"));
}while (isNaN(tamaño) || tamaño < 1)

let lista = [];
//RELLENAR LA MATRIZ
for(let i = 0; i<tamaño; i++) {
    let fila = [];
    for(let x = 0; x<tamaño; x++) {
        fila.push(parseInt(Math.random() * (tamaño+1) + tamaño));
    }
    lista.push(fila);
    x = 0;
}
console.log(lista);

//APARTADO B
for(let i = 0; i<tamaño; i++) {
    let string ="";
    for(let x = 0; x<tamaño; x++) {
        string += lista[i][x];
    }
    console.log(string);
    string = "";
    x = 0;
}
//APARTADO C
let numero = 0;
for(let i = 0; i<tamaño; i++) {
    for(let x = 0; x<tamaño; x++) {
        numero += lista[i][x];
    }
    x = 0;
}
console.log(numero);
//Funcion sacar mayor apartado A
function sacarMayor(matriz){
    let mayor = matriz[0][0];
    for(let i = 0; i<tamaño; i++) {
        for(let x = 0; x<tamaño; x++) {
            if(matriz[i][j] > mayor) mayor = matriz[i][j];
        }
        x = 0;
    }
}

let otra = [];
for(let i = 0; i<tamaño; i++) {
    let fila = [];
    for(let x = 0; x<tamaño; x++) {
        if(lista[i][x] % 15 == 0) fila.push("FIZZBUZZ");
        else if(lista[i][x] % 3 == 0) fila.push("FIZZ");
        else if(lista[i][x] % 5 == 0) fila.push("BUZZ");
        else fila.push(lista[i][x]); 
    }
    otra.push(fila);
    otra = [];
    x = 0;
}
console.log(otra);