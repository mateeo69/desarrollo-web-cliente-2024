let lista = [1,2,3,4];
let otra = ['uno', 'dos','true'];

//Función concat para unir al array nuevos elementos
let res = lista.concat(6,7,8,9);
res = lista.concat(otra);

console.log(res.length);

//Función push mete en el array al final
res.push("flipao");
//Funcion unshift mete en el array por delante
res.unshift("por delante");
//Función pop, te saca el ultimo valor, independientemente que lo guardes o no
let ultimo = res.pop();
console.log(ultimo);
//Función shift, te saca el primer valor, independientemente que lo guardes o no
ultimo = res.shift();
console.log(ultimo);

//Función reverse, te da la vuelta al array
res.reverse();

//Función JOIN, te une los elementos de array separados de lo que le digas.
let salida = res.join("-");
console.log(salida);

console.log(res);