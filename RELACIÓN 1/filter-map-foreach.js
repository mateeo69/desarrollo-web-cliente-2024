let brutos = [1000, 1300, 1500, 1700, 2000, 2200, 2800, 3000];
const IRPF = 15;

//MANERAS ANTIGUAS DE HACER LAS COSAS
/*Mostrar por consola todos los sueldos uno debajo del otro.*/
for (let i = 0; i<brutos.length; i++){
    console.log(brutos[i]);
}
/*Aplicar el 15% de retención a cada sueldo y devolver otro array (netos) con los nuevos valores*/
function retencion(sueldos){
    for (let i = 0; i<sueldos.length; i++){
        sueldos[i] -= ((sueldos[i] * IRPF) / 100);
    }
    return sueldos;
}
/*Crear el array fiscalAlto y guardar en el todos los sueldos mayores a 1935*/
let fiscalAlto = [];
for (let i = 0; i<brutos.length; i++){
    if(brutos[i] > 1935){
        fiscalAlto.push(brutos[i]);
    }
}

//NUEVAS MANERAS MEJORES.
//Maneras de hacer el MAP BUENA.  -- ARRAY METHODS recorrer.

let netos = brutos.map((ele) => (ele-(ele*IRPF)/100));
netos = brutos.map(function(ele){
    return ele-((ele*IRPF)/100);
});

//Maneras de hacer filter
fiscalAlto.filter(ele => ele>1935)
fiscalAlto.filter(function(ele){
    return 1935 > ele;
});

//Maneras de hacer forEach
fiscalAlto.forEach((elemento) => {
    console.log(elemento);
})
fiscalAlto.forEach(function(elemento) {
    console.log(elemento);
});