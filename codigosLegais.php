<?php


CSS inline / incorporado e arquivo externo
==========================================


'Seletores de posicões DOM'
===========================
/**
 * 
 * 
 */

// TODO - Usando o getElement =================================
//let itexto = document.getElementById('produto');

//console.log(itexto);

//let spans = document.getElementsByTagName('span');

//console.log(spans);

//let eles = document.getElementsByClassName('texto');

//console.log(eles)

// Ler valores
// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// Alterar valores
//spans[0].textContent = 'JavaScript';
// spans[1].innerHTML = 'Geek University';

//let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

let inp1 = document.querySelector('body div.container div.row input');
// Acima => pega uma input que esta dentro de div.row dentro de uma div.container dentro de body
console.log(inp1);

// TODO - Usando querySelector ====================================
// let inp = document.querySelectorAll('input'); // busca todos elementos pela tag

//let eles = document.querySelectorAll('.texto'); //busca todos elementos pela classe

//let div1 = document.querySelector('#div1'); // Busca elemento pelo ID

//let imp = document.querySelector('input[name=preco]');

//console.log(imp);

// Exemplo 1

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado...');
// }

// Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}

==================================================================================================

let btn = document.querySelector('button');

btn.onclick = function(){
    // Declara a variável de texto que será adicionado ao parágrafo
    let textElement = '';

    // Recupera o valor do input
    let inputValue = document.querySelector('input').value;

    // Cria um elemento parágrafo <p></p>
    let pElement = document.createElement('p');

    // Adiciona o atributo class ao parágrafo
    pElement.setAttribute('class', 'classe-p');

    // Verifica se o usuário preencheu o input, caso contrário coloca um texto padrão
    if(inputValue !== ""){
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode('Veio vazio....');
    }

    // Adiciona o texto como filho do parágrafo
    pElement.appendChild(textElement);

    // Recupera a div
    let divElement = document.querySelector('#app');

    // Adiciona o parágrafo como filho da div
    divElement.appendChild(pElement);

    // Limpa o input 
    document.querySelector('input').value = '';
}


==================================================================================================

'DOM Elements'
https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute 

'DOM Events (mouse, etc...)'
https://www.w3schools.com/jsref/event_onmouseleave.asp 


'element.setAttribute(name, value);'

'seta uma cor'
document.getElementById("id").style.color = "red";

'pega a cor atual'
var x = document.getElementById("myH1").style.color


'Desabilita o botão'
<button>Hello World</button>

var b = document.querySelector("button");
b.setAttribute("disabled", "disabled");


'Seta o estilo para vermelho'
element.style.backgroundColor = "red";


'Remove atributo'
<h1 class="democlass">Hello World</h1>
<p id="demo">Click the button to remove the class attribute from the h1 element.</p>
<button onclick="myFunction()">Try it</button>
<script>
function myFunction() {
  document.getElementsByTagName("H1")[0].removeAttribute("class"); 

==================================================================================================

'Remover botões in line'
===========================

        <div id="app">
            <button class="btn" onclick="removerBotao(this);">0</button>
            <button class="btn" onclick="removerBotao(this);">1</button>
			

function removerBotao(btn){
    // Recuperar o elemento div
    //let divElement = document.querySelector('#app');

    // Remove o filho selecionado da div
    //divElement.removeChild(btn);

    document.querySelector('#app').removeChild(btn);
}

'Remover botões no script, sem ser inline'
==========================================

        <div id="app">
            <button class="btn">0</button>
			
let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        document.querySelector('#app').removeChild(this);
        // document.querySelector('#app').removeChild(btns[i]); // equivalentes ao de cima
    };
}


==================================================================================================

'Mudando estilos - style'
=========================
let caixaElement = document.querySelector('.caixa');

caixaElement.style.width = '200px';
caixaElement.style.height = '200px';
caixaElement.style.backgroundColor = 'green';

/*
 As configurações de estilos via JavaScript seguem 
 os mesmos conceitos e atributos utilizados via CSS.

 OBS: Diferença

 Em CSS onde usa-se background-color
 Em JavaScript usa-se backgroundColor

 Outro exemplo:

 Em CSS onde usa-se font-size
 Em JavaScript usa-se fontSize

 Mais um exemplo:

 Em CSS onde usa-se margin-bottom
 Em JavaScript usa-se marginBottom
 
*/

==================================================================================================

'Colocar cor de fundo conforme o botão selecionado'
===================================================

        <div id="app">
            <button class="btn-green">Verde</button>
            <button class="btn-yellow">Amarelo</button>


let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    console.log(btns[i].getAttribute('class').split('-')[1]); // green/yellow/blue/black/red
    btns[i].onclick = function(){        
        document.querySelector('body').style.backgroundColor = 
            this.getAttribute('class').split('-')[1];

        // São a mesmo coisa, substitui o acima
        //let cor = this.style.backgroundColor;
        //let cor = btn[i].style.backgroundColor;
    };
}


==================================================================================================
'Reflesh automático da pagina'

<!doctype html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="4"> <!-- refresh, atualização automática da página -->

<meta http-equiv="refresh" content="4"> <!-- refresh, atualização automática da página -->


==================================================================================================

'Fontes externas'
=================


https://fonts.google.com 


<html>
    <head>
        <title>Curso de CSS3 - Essencial</title>
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="4"> <!-- refresh, atualização automática da página -->
        <link rel="stylesheet" href= "css/estilos.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=The+Nautigal&family=Vujahday+Script&family=Waterfall&display=swap" rel="stylesheet">

        <style>

            @import url('https://fonts.googleapis.com/css2?family=The+Nautigal&family=Vujahday+Script&family=Waterfall&display=swap');

            h1 {
                /*font-family: sans-serif;*/
                font-family: 'Waterfall', cursive;                                
            }
            p {
                color: brown;
            }

        </style>
    </head>
    <body>
        <h2>https://fonts.google.com</h2>
        <h1>CSS inline/ incorporado/ externo arquivo</h1>
        <p style="color: chocolate; font-family: 'The Nautigal', cursive;">Cafe Townsend's visionary chef leads the way in a culinary revolution. Proclaimed by many to be the best chef in the world today, Chef Bienni blends earthy seasonal flavors and bold ingredients to create exquisite contemporary cuisine. </p>
        <span >
            <p style="font-family: 'Vujahday Script', cursive; font-size: 22px;">The name Cafe Townsend comes from our first restaurant, located in a historic building on Townsend Street in San Francisco, where we opened the doors in 1985. We've replicated the elegant interior, exceptional service, and world-class cuisine in our restaurants around the country.</p>
        </span>          
    </body>
</html>
==================================================================================================
"font-family: 'Vujahday Script', cursive; "
==================================================================================================

'Imagens nas listas'
====================


	ul, ol {
		list-style-image: url('imagens/estrela.png');
		/*list-style-image: linear-gradient(to left bottom, red, blue);*/
	}
==================================================================================================

'cores nas LIs'
===============

            li:first-child {
                color: aqua;                
            }
            li:last-child {
                color: aquamarine;
            }
            li:nth-child(3) { /*li:nth-child(even ou odd)*/
                color: red;
            }
			
==================================================================================================

'menu vertical'
==============

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="4"> <!-- refresh, atualização automática da página -->
        <title>Curso de CSS - Menu Vertical</title>
		<style>
            body {
                font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
                font-size:13px;
            }

            nav ul {
                margin: 0;
                padding: 0;
                width: 200px;
            }

            nav ul li {
                list-style-type: none;
                
            }

            nav ul li a {
                display: block;
                text-decoration: none;
                color: #FFF;
                background-color: cadetblue;
                padding: 5px;
                margin-bottom: 1px;
            }

            nav ul li a:hover {
                background-color: chartreuse;

            }
        </style>
    
    </head>

    <body>
        <nav>
            <ul>
                <li><a href="brasil.html">Brasil</a></li>
                <li><a href="portugal.html">Portugal</a></li>
                <li><a href="angola.html">Angola</a></li>
                <li><a href="mocambique.html">Moçambique</a></li>
                <li><a href="caboverde.html">Cabo Verde</a></li>
            </ul>
        </nav>
    
    </body>
</html>

==================================================================================================

'Imagens nos links de menu jQuery' - Se o link contiver $='uma expressão qualquer' é colocado após ou antes uma imagem.
==================================



		<script src="jquery-3.2.1.min.js"></script>
        <script>
			$( function(e) {
                $("li a[href$='.pdf']").after("**")
                $("li a[href$='.zip']").before("<img src='imagens/icon_zip.gif'>")
                $("li a[href$='.pdf']").after("<img src='imagens/icon_pdf.gif'>")
            });
		</script>
    </head>

    <body>

		<ul>
        	<li><a href="arquivo.zip">Arquivo compactado</a></li>
            <li><a href="arquivo.zip">Arquivo zipado</a></li>
            <li><a href="arquivo.pdf">Documento de Texto</a></li>
            <li><a href="arquivo.pdf">Curriculum Vitae</a></li>
			<li><a href="arquivo.zip">Arquivo para download</a></li>            
        </ul>


==================================================================================================

O evento ready é disparado depois que o documento HTML foi carregado.

O onload só é disparado quando todo o conteúdo é carregado (incluindo imagens, vídeos, etc).

Repare que o ready é específico do jQuery. 
Isto é, ele não existe "nativamente". 
A intenção dele é executar algo o mais rápido possível depois de carregar o documento, 
sem precisar esperar todo o conteúdo ser carregado.

Exemplo do document.ready usando uma imagem pesada


$(document).ready(function() {  // é disparado depois que o documento HTML foi carregado

});


window.onload = function() {  // após todo conteúdo é carregado (incluindo imagens, vídeos, etc).

};

==================================================================================================
**************************************************************************************************
==================================================================================================
'LOOPs'
========
            //for
            for(var i = 0; i <= 10; i++){
                console.log(i);
            }
            
            //while
            var numero = 20;

            while(numero <= 10){
                console.log(numero);
                numero++;
            }

            //do-while
            var cont = 10;

            do{
                console.log('Imprime o valor de cont: ' + cont);
                cont++;
            }while(cont <= 5);

            const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];


            // map
            nomes.map(function(nome, i) {
                console.log('[map]', nome, i);
            });

            // forEach
            nomes.forEach(function(nome, i) {
                console.log('[forEach]', nome, i);
            });

            // for
            for(let i = 0; i < nomes.length; i = i + 1 ) {
                console.log('[for]', nomes[i]);
            }


==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================

==================================================================================================






























































