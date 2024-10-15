
function manu(){
    let parras = document.getElementsByTagName("table");
    let dedo = parras[0];

    console.log(dedo.id);
    //dedo.width = "1500px";
    dedo.id = "tablita";
    dedo.className = "pepe";
    dedo.setAttribute("class", "goku");
    dedo.setAttribute("height", "1000px");

    let valor = dedo.getAttribute("height");
    valor += 3;
    console.log(valor); //sale 1000px3  -- SI le pones antes de dedo.getAttribute un parseInt lo solucionas

}

window.onload = function(){
    
    //let body = document.getElementsByTagName("body")[0];
    //body.bgColor = "red";
    // document referencia al BODY
    document.bgColor = "white";

    let bombi = document.getElementById("bombom");
    //innerHTML 
    //En este caso me devuelve su contenido sus hijos y demas
    console.log(bombi.innerHTML);
    bombi.innerHTML = "<b>ACABO DE CARGARME EL ARBOL</b>";
    console.log(bombi.innerText);
    console.log(bombi.textContent);

}

function cambia(){
    //Llegar al elemento
    let dedo = document.getElementsByTagName("input")[0];

    dedo.type = "password";
}


/* 
Acceso a atributos

1) Notacion PUNTO
2) GET Y SET
*/