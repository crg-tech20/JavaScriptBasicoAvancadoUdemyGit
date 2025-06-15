
// TODO - Função normal, não anonima.
let numeros = [1, 2, 3, 4, 5, 6];

function dobrar(valor){
    return valor * 2;
}
let res1 = numeros.map(dobrar); // Map cria um novo array usando o array acima
console.log(numeros);
console.log(res1);

// TODO - Funções Anônimas - Lambdas (Funções Lambdas)
let res2 = numeros.map(function(valor){
    return valor * 2;
});
console.log(res2);
console.log(dobrar(9));

// TODO - Funções Anônimas - Lambdas (Funções Lambdas)
const outra = function(valor){
    return valor * 2;
}
console.log(outra(9));

// TODO - Função normals
function somar(v1, v2){
    return v1 + v2;
}

// TODO - Arrow function
const subtrair = (n1, n2) => {
    return n1 - n2;
}

// TODO - Funções Anônimas - Lambdas (Funções Lambdas)
let mostrar = function(n1, n2, calculo = somar){
    console.log(calculo(n1, n2));
}
mostrar(2, 4); // 6
mostrar(6, 9, somar); // 15
mostrar(9, 6, subtrair); // 3 , usando uma função arrow functions

// TODO - Funções Anônimas - Lambdas (Funções Lambdas)
mostrar(3, 6, function(n1, n2){  // Passando uma função anonima
    return n1 + n2;
}); //9
mostrar(3, 6, (v1, v2) => v1 * v2);  // Passando um função anonima como arrow function

// TODO - Sort de números com Arrow Functions
var valores = [1.2, 2.2, 8.2, 1.3, 1.1];
console.log(valores);

// Primeira forma
var val = (n1, n2) => n1 - n2;
valores.sort(val);

// Segunda forma
valores.sort((n1, n2) => n1 - n2)
console.log(valores);

