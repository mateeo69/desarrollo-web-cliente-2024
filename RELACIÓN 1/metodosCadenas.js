let texto = "Soy una cadena";
    console.log(texto.length);

let my = texto.toUpperCase(); // || toLowerCase();
console.log(my);

let letra = texto.charAt(1); // Elegir character at posicion
console.log(letra);

let jorge = texto.indexOf('a'); // Te devuelve la posicion en la que está ese caracter
console.log(jorge);

let trozo = texto.substring (3,5); //Devuelve la cadena entre esa posicion y la otra, en este caso devuelve 3 y 4 el 5 no entra.
console.log(trozo);

let lista = [];
lista = texto.split('a'); // Separa las cadenas por las A y las elimina.
console.log(lista);