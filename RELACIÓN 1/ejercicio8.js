function countBy(numX, numY){
    let lista = [];
    let i = 0;
    if (numX < 0 || numY < 0) {
        return lista;
    }
    lista[i] = 1;
    for(i = 1; i<=numY; i++) {
        lista[i] = numX * i;
    }
    return lista;
}
console.log(countBy(4, 5))