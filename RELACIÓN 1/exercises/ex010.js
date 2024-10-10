function filtro(){
    let list1 = ["verde", "azul", "morado"];
    let list2 = ["azul", "morado", "negro", "amarillo"];

    let list3 = list3.concat(list2);
    let resultado = [];

    for(let colores of list3){
        let contador = 0;
        for(let color of list3){
            if(colores == color){
                contador++;
            }
        }

        if(contador == 1){
            resultado.push(colores);
        }
    }
    console.log(resultado);
}