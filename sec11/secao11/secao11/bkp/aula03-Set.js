/*
    - Conjuntos não aceitam repetição de valores;
    - Conjuntos não são indexados;

    site
    ----
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
*/

// Declarando um conjunto
let cursos = new Set();

// Adicionando valores
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

// Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

let ret = cursos.add('Banco de dados');
//console.log(ret);

//console.log(cursos);

// Accessando o tamanho do conjunto
//console.log(cursos.size); 

//console.log(cursos.has('Banco de dados')); 

// Deletar elementos de um conjunto
//let ret = cursos.delete('Programação para leigos');
//console.log(ret);

let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];
let frutas_unicas = new Set(frutas);
console.log(frutas_unicas);

// usando arrow function
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

//for (let [key, value] of cursos.entries()) console.log(value);
// loga os itens na ordem: 1, "texto"
//for (let item of cursos) console.log(item);

// loga os itens na ordem: 1, "texto"
//for (let item of cursos.keys()) console.log(item);
/*
=================================================================================
Iterando objetos Set
// iterar sobre os itens em set
// loga os itens na ordem: 1, "texto"
for (let item of meuSet) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.keys()) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.values()) console.log(item);

// loga os itens na ordem: 1, "texto"
//(key e value são os mesmos aqui)
for (let [key, value] of meuSet.entries()) console.log(key);

// converte Set para um Array
var meuArr = [v for (v of mySet)]; // [1, "some text"]

// o seguinte também funcionará se for executado em um documento HTML
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// a conversão entre Set e Array
mySet2 = Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// intersecção pode ser simulado via
var intersection = new Set([...set1].filter(x => set2.has(x)));

// Iterar entradas set com forEach
meuSet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
Copy to Clipboard
Implementando operações básicas entre conjuntos
function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function uniao(setA, setB) {
    var _uniao = new Set(setA);
    for (var elem of setB) {
        _uniao.add(elem);
    }
    return _uniao;
}

function interseccao(setA, setB) {
    var _interseccao = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _interseccao.add(elem);
        }
    }
    return _interseccao;
}

function diferencaSimetrica(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        if (_diferenca.has(elem)) {
            _diferenca.delete(elem);
        } else {
            _diferenca.add(elem);
        }
    }
    return _diferenca;
}

function diferenca(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        _diferenca.delete(elem);
    }
    return _diferenca;
}

//Exemplos
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
uniao(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
interseccao(setA, setC); // => Set [3, 4]
diferencaSimetrica(setA, setC); // => Set [1, 2, 5, 6]
diferenca(setA, setC); // => Set [1, 2]
Copy to Clipboard
Relação com objetos Array 
var myArray = ["value1", "value2", "value3"];

// Use o construtor regular de Set para transformar um array dentro de um Set
var mySet = new Set(myArray);

mySet.has("value1"); // retorna true

// Use o operador de propagação para transformar um Set em um Array.
alert(uneval([...mySet])); // Irá mostrar-lhe exatamente o mesmo Array como myArray
Copy to Clipboard
Removendo elementos duplicados de um Array
// Use para remover elementos duplicados de um Array

const numeros = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numeros)])

// [2, 3, 4, 5, 6, 7, 32]
Relação com objetos String
var texto = 'India';

var meuSet = new Set(texto);  // Set ['I', 'n', 'd', 'i', 'a']
meuSet.size;  // 5

*/