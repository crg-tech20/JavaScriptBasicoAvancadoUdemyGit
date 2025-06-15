/**
 * 
 * 
 * 
 * 
 */
function mostrarAlerta(){
    alert('O botão foi clicado!');
}


function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...';
}

function mudarCor(){
    // #000000 (black), #FFFFFF (branco)
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1); 
    // começa com 0,xxx  vezes cores.lenght gera => 1,xxx , 2,xxxx etc
    // o Math.floor arredonda sem as casas decimais, dai sairá 1 2 3 etc aleatórios até 7 => de 0 a 7
    document.bgColor = cores[numero];
}

function escreverTexto(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}

// let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];
// const numero = Math.floor((Math.random() * cores.length) + 1);
// console.log(numero);

