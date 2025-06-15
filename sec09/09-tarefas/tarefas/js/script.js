// 1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');
document.getElementById("demo").style.backgroundColor = "#FF9933";

// Adicionando um evento
input.addEventListener("keyup", function(){
    removerSpans();
    keyupFunction();
});
input.addEventListener("keydown", function(){
    removerSpans();
    keydownFunction();
});
//addEventListener("keyup", myFunction);

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista
let lista = document.querySelector('#lista');

// card
let card = document.querySelector('.card');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; 
// O " || [] " Lê o banco e se nada tiver devolve um array vazio []

function renderizarTarefas(){

    // Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li');

        //Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        // Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();

// 1) Precisamos "escutar" o evento de clique no botão
btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuário no input
    let novaTarefa = input.value.toUpperCase();

    if(novaTarefa !== ""){
        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

        // Executando a função para renderizar as tarefas
        renderizarTarefas();

        // Limpar o input
        input.value = '';

        // Limpar mensagens de erro (spans)
        removerSpans();

        // Salva os novos dados no banco de dados
        salvarDadosNoStorage();
    }else{
        // Limpar mensagens de erro (spans)
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }    
}


function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    // renderiza novamente a tela
    renderizarTarefas();

    // Salva os novos dados no banco de dados
    salvarDadosNoStorage();
}


function salvarDadosNoStorage(){
    //alert(JSON.stringify(tarefas));
    // Todo navegador web possui esta capacidade, forma: {chave: valor}
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); // gravando no banco
    // So passo na forma string/texto, ou seja json => ["casa", "cozinha"]
}

function keydownFunction() {
    document.getElementById("demo").style.backgroundColor = "#CCFF99";
}
  
  function keyupFunction() {
    document.getElementById("demo").style.backgroundColor = "#FF9933";
}
