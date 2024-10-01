let lista = [1,2,3,4,5];
let otra = ['uno', 'dos,true'];
let res = lista.concat(6,7,8,9)

function mayorEdad(edad){
    return edad>18;
}
//se ejecuta la funcion mayorEdad en todos los elementos de la lista otra.
let ok = res.some(mayorEdad);

ok = res.some(function(edad){
    return edad>18;
})
console.log(ok);

res.forEach(function(ele){
    if(ele%2 == 0){
        console.log("es par");
    }else{
        console.log("es impar");
    }
});

let otro = res.map((ele,pos) => {
    if(ele%2 !== 0){
        return ele;
    }else{
        return pos;
    }

});
console.log(otro);

