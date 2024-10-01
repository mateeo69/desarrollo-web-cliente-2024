let lista = [1,2,3,4,5];
//SPREAD OPERATOR [... - Crear una copia del array.
let otra = [...lista];
otra[0] = 67;

let ulti = "MARTILLO VA!!!";
//Array de caracteres, como un split.
let luis = [...ulti];


let a, b, c, otros;

let listita = [23, 56, 78];

[a,b,c] = [23,56,78];
console.log(a);
console.log(b);
console.log(c);

let liston = [24, 56, 24, 1, 2, 4];

//intercambiar pos 1 con pos 4
[lista[1],lista[4]] = [lista[4], lista[1]];

function paco(){
    return [4,9];
}

let posx,posy;
[posx, posy] = paco();