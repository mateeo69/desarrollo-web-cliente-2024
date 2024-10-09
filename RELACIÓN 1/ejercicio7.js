function arrayDeformer(lista){
    let resultado = [];
    resultado[0] = lista[0]

    for(let i = 1; i<lista.length; i++){
        resultado[i] = lista[i] + resultado[i-1];
    }
    return resultado;
}

console.log(arrayDeformer([1,2,3,4,5,6]));