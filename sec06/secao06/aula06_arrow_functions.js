
// Forma 1
function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6));

// Forma 2
let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(4, 6));

// Forma 3
let somar3 = somar1; // Estou apenas atribuindo, não estou executando.

console.log(somar3(4, 6));

// TODO Arrow Function
const somar4 = (num1, num2) => {
    return num1 + num2;
}
console.log(somar4(4, 6));

/*
Atenção:

Caso a sua função tenha apenas 1 parâmetro de entrada e executa apenas uma linha,
você pode simplificar ainda mais usando Arrow Function
*/

const dobrar = valor => valor * 2;
// const dobrar = (valor) => valor * 2;
console.log(dobrar(5));

// Funções sem parametros de entrada, forma simplificada
function mensagem1(){
    console.log('Evolua seu lado geek!');
}

mensagem1()

const msg = () => console.log('Evolua seu lado geek!');  // Arrow function
msg();



