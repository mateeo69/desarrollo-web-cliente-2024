
function recogerNumero(cadena){
    let valor;
    do{
        valor = Number(prompt(cadena));
    }while(isNaN(valor))
        return valor;
}

function sumar (a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir (a,b){
    return a/b;
}

function recogeOperacion(a,b){
    do{
        valor = prompt("¿Que operación deseas hacer?");
        valor.toLowerCase();
    }while (valor != "sumar" && valor != "restar" && valor != "multiplicar" && valor != "dividir")
    
    switch(valor){
        case "sumar":
            return sumar(a,b);
            break;
        case "restar":
            return restar(a,b);
            break;
        case "multiplicar":
            return multiplicar(a,b);
            break;
        default:
            return dividir(a,b);
            break;
    }
}

function main(){
    let valor1 = recogerNumero("Dame el primer numero: ");
    let valor2 = recogerNumero("Dame el segundo numero: ");

    
    alert(recogeOperacion(valor1, valor2));
}