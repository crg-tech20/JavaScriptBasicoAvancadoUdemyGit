/**
 * 
 * // TODO - for ... in  => loop pelas keys
 * 
 * // TODO - for ... of   => loop pelos valores
 * 
 * // TODO - for(let i = 0; i < precos.length; i++){}
 * 
 * // TODO - arrayNumeros.forEach(function(elemento){} )
 * 
 * // TODO - arrayMarcas.forEach((marca, indice) => {} ) 
 * 
 * // TODO - arrayNumeros.forEach(numero => {} )
 * 
 * // TODO - numbers.forEach(myFunctionTeste);
 * // TODO - function myFunctionTeste(item, index, arr) {}
 * 
 * 
 */
const cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
]
const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];
let menores = []

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

// Usando for novo
for(let p in precos){  // for ... in  => loop pelas keys
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}

for(let p of precos){  // for ... of   => loop pelos valores
    console.log(p);
}

// Usando for antigo
for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}

console.log(menores);


////////////// TODO - foreach e Arrow function //////////////
console.log('\n//////////////foreach e Arrow function //////////////');
// https://blog.betrybe.com/javascript/javascript-foreach/

// foreach()
var nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})

var arrayNumeros = [1,2,3,4,5,6];
arrayNumeros.forEach(function(elemento){
    if (elemento % 2 == 0) 
    console.log(elemento);
});

// Arrow function
var arrayNumeros = [1,2,3,4,5,6];
arrayNumeros.forEach(numero => {
    if (numero % 2 === 0) 
   console.log(numero);
});

var arrayMarcas = ['Ford', 'BMW', 'Fiat', 'Audi', 'Volkswagen'];
arrayMarcas.forEach((marca, indice) => {
    console.log("A marca " + marca + " corresponde ao índice: " + indice);
    if (marca === 'BMW'){
        let itemExcluido = arrayMarcas.shift();
        console.log("Excluímos o elemento " + itemExcluido);
    }
});

arrayMarcas.forEach((marca, indice) => { 
    console.log("A marca " + marca + " corresponde ao índice: " + indice)});

    var marcas = [{marca: 'Ford', modelo: 'Focus'},
    {marca: 'BMW', modelo: 'BMW Z4'},
    {marca: 'Fiat', modelo: 'Palio'},
    {marca: 'Audi', modelo: 'A3'}];
marcas.forEach((elemento) => {
console.log("Marca: " + elemento.marca + " - modelo: " + elemento.modelo);
})


var numbers = [65, 44, 12, 4];
numbers.forEach(myFunctionTeste);

function myFunctionTeste(item, index, arr) {
  console.log(arr[index] = item * 10);
  console.log(arr);
}


// Usando forEach
cursos.forEach(apresentar); // Aqui está ocorrendo o callback

// usando lambda e forEach
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
});

cursos.forEach(function(curso, indice, array){ // o forEach, recebe o valor do curso, o indice e o array completo
    console.log(`${indice + 1} - ${curso}`);
    console.log(`Array completo: ${array}`);
});

function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
}

// para cada
cursos.forEach(imprimir);

// usando arrow function
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

// Forma 1 
menores = precos.filter(function(preco){
    return preco < 50;
});

console.log(menores);

// Forma 2 Usando arrows functions
menores = precos.filter(preco => preco < 50);

console.log(menores);



//console.log(cursos);
//console.log(cursos.length);

// definir uma função
function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
}

// para cada
//cursos.forEach(imprimir);

// utilização de uma função anônima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    //console.log(`${indice} - ${curso}`); # <== template string
});

for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}

console.log('\n////////////// for //////////////');
// ========== for of =============

// let nome = 'Geek University';

// for(let letra of nome){
//     console.log(letra);
// }

//let numeros = [1, 2, 3, 4, 5];

// for(let numero of numeros){
//     console.log(numero * 2);
// }


// for(let indice in numeros){
//     console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
// }


var cursos1 = new Map([
    [1, 'Programação para Leigos'],
    [2, 'Algoritmos e Lógica de Programação'],
    [3, 'Programação em C'],
    [4, 'Programação em Java'],
    [5, 'Programação em Python'],
    [6, 'Banco de Dados'],
    [7, 'Programação Web com Django Framework']
]);

// for(let curso of cursos1){
//     console.log(`${curso[0]} - ${curso[1]}`);
// }

// cache/valor
// for(let curso of cursos1){
//     console.log(curso);
// }

// Somente a chave
for(let chave of cursos1.keys()){
    console.log(chave);
}

// Somente o valor
for(let valor of cursos1.values()){
    console.log(valor);
}

// chave e valor
for(let [chave, valor] of cursos1.entries()){
    console.log(`${chave} - ${valor}`);
}

let conjunto = new Set([1, 2, 3, 4, 5, 5]);

for(let numero of conjunto){
    console.log(numero);
}


// TODO - For in e For of 
console.log('\n====== Exemplos de uso de For in // For of =========');
// Exemplos de uso de For in // For of

let arr = ['el1', 'el2', 'el3'];
arr.addedProp = 'arrProp';

console.log('\n===== For in => sobre keys =======');
// allKeys are the property keys
for (let allKeys in arr) {
  console.log(`Keys => ${allKeys}`);
  console.log(`arr[${allKeys}] => ${arr[allKeys]}`);
}

console.log('\n====== For of => sobre values ========');
// allValues are the property values
for (let allValues of arr) {
  console.log(allValues)
}

let iterable = [10, 20, 30];
for(let value of iterable){
    console.log(value);
}



























