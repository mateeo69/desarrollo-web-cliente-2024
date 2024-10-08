//FUNCION QUE RELLENA UNA MATRIZ CON NUMEROS RANDOM
function rellenarMatrizRandom(tam, max, min){
    let lista = [];
//RELLENAR LA MATRIZ
    for(let i = 0; i<tam; i++) {
        let fila = [];
        for(let x = 0; x <tam; x++) {
            //Math.random() * (max - min) + min;
            fila.push(generaRandom(max, min));
        }
        lista.push(fila);
        x = 0;
    }
    return lista;
}

//FUNCION QUE GENERA UN RANDOM
function generaRandom(max, min) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

//UNA FUNCION QUE MIRE SI HAY ALGUN ELEMENTO REPETIDO EN LA MATRIZ
function checkRepetido(matriz){
    let otra = [];

    matriz.forEach(element => {
        //Primer foreach filas
        element.forEach(element => {
            if(otra.includes(element)) return true;
        })
        //Vamos metiendo elementos en otra para ir comparando dentro del for each de arriba
        otra.push(element);
    });
    return false;
}

//UNA FUNCION QUE MIRE SI ES UN ANAGRAMA O NO
function anagrama(cadena1, cadena2){
    let troceado = [...cadena1];
    //Me copio el array a troceado.
    if(cadena1.length == cadena2.length) {
        troceado.forEach(element => {
            //Pregunto si en cadena2 hay un element que es cada posicion del otro array
            if(cadena2.includes(element)) return true;
        })

        //if (cadena1.sort() == cadena2.sort()) return true;
        // SI el array lo quiero volver una cadena entera otravez cadena1 = cadena1.join(cadena1.sort)
    }
    return false;
}

