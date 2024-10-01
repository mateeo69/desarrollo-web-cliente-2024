let colores = ['grey', 'red', 'blue', 'green', 'yellow', 'black'];
let i = 0;
let x = 0;

//Matchea arrays
function e15(palabras){
    let lista = [];
    while(colores[x] != undefined){
        while(palabras[i] != null){
            if(palabras[i] == colores[x]){
                lista.push(palabras[i]);
            }
            i++;
        }
        i = 0;
        x++;
    }
    return lista;
}

let res = e15(['grey', 'red', 'green', 'pepino']);
console.log(res);