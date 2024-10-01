let valor = 0;
let cont = 0;
let cont2 = 0;
let array = [];
let linea = "";

do {
    valor = prompt("Introduce un valor positivo: ");
}while(valor < 2 || isNaN(valor));

for (let i = 0; i<valor; i++){
    for(let x = 0; x<valor; x++, cont++){
        let n = valor*(cont+1);
        array.push(n);
        if (n < 10){
            linea += "0" + n + " ";
        }else{
            linea += n + " ";
        }
    }
    console.log(linea);
    linea = "";
}

//Mostrar la matriz mostrando las filas como columnas
let cum = [];
for (let i = 0; i<valor; i++){
    array.forEach((ele) => {
        //El forEACH engancha cada fila y hacemos push en el nuevo en cada elemento de i.
        cum.push(ele[i]);
    })
}
console.log(cum);


