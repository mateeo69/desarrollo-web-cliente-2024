var matriz = [];

function main(){
    pedirMesas(matriz);
    let comensal = recibirCliente();
    buscarHueco(matriz, comensal);
}

function pedirMesas(matriz){
    let cont = 0;
    let mesitas = "";
    do{
        var num = prompt("¿Cuantas mesas tiene tu restaurante?");
    }while(num < 0);

    while (num > cont) {
        let numerito = Math.trunc((Math.random()*5));
        matriz.push(numerito);
        mesitas += numerito + " ";
        cont++;
    }
}

function recibirCliente() {
    let comensales = 0;
    do{
        if(comensales > 6) console.log("Lo siento, no admitimos grupos de 6");
        comensales = prompt("Buenas tardes, cuantas personas comerán");
    }while(comensales < 1 || comensales > 4);
    return comensales;
}

function buscarHueco(matriz, comensales){
    let cont = 0;
    for(let i = 0; i<matriz.length; i++){
        if(matriz[i] == 0) matriz[i] += comensales;
    }
    for(let i = 0; i<matriz.length; i++){
        if(comensales + matriz[i] < 5) matriz[i] += comensales;
        else cont++;
        if(cont == matriz.length) console.log("Lo siento, no queda sitio en el restaurante.") 
    }
    console.log(matriz);
}

