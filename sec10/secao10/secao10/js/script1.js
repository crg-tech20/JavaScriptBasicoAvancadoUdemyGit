// Ajax (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');


btn.onclick = function(){

    // Limpar o conteúdo da div
    div.innerHTML = '';

    // Instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    //console.log(ajax.readyState); // 0
    // Abrir uma conexão (GET, POST, PUT, DELETE...)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    //console.log(ajax.readyState); // 1
    // Enviar a requisição
    ajax.send(null); 

    ajax.onreadystatechange = function(){

        // Criar elemento span
        let spanNone = document.createElement('span');

        // Criar a variável nome
        let txtNome = '';

        /*
         ajax.readyState -> 0 => Antes da conexão ser aberta
         ajax.readyState -> 1 => Após abrir a conexão
         ajax.readyState -> 2 => headers (cabeçalhos) foram recebidos
         ajax.readyState -> 3 => Carregando o corpo da requisição (conteúdo/dados)
         ajax.readyState -> 4 => O conteúdo (dados) está pronto para uso
        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){

                //Returns a string containing all header value pairs from the response.
                console.log('status code: ' + ajax.status);
                console.log('status: ' + ajax.statusText);                
                console.log(ajax.getResponseHeader('content-type'));
                console.log(ajax.getAllResponseHeaders());

                // transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);
                console.log(usuario);
                
                // Se o usuário possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNome = document.createTextNode(`O usuário ${input.value} não tem nome.`);
                }
                // Adiciona o texto ao span e o span à div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);

                // Limpar o input
                input.value = '';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                // Adiciona o texto ao span e o span à div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }    

}

/*

https://www.javascripture.com/XMLHttpRequest

--------------------------------------------------------

<form name="inputform" action="somewhere" method="post">
    <input type="hidden" value="person" name="user">
    <input type="hidden" value="password" name="pwd">
    <input type="hidden" value="place" name="organization">
    <input type="hidden" value="key" name="requiredkey">
</form>
O código abaixo demonstra como fazer isso.

var http = new XMLHttpRequest();
var url = 'get_data.php';
var params = 'orem=ipsum&name=binny';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
----------------------------------------------------


var xhr = new XMLHttpRequest();
xhr.open('POST', 'somewhere', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send('user=person&pwd=password&organization=place&requiredkey=key');

Ou, se você pode contar com o suporte do navegador, pode usar o FormData :

var data = new FormData();
data.append('user', 'person');
data.append('pwd', 'password');
data.append('organization', 'place');
data.append('requiredkey', 'key');

var xhr = new XMLHttpRequest();
xhr.open('POST', 'somewhere', true);
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send(data);

*/














