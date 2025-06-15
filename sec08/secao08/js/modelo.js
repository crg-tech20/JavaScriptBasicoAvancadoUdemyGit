$(document).ready(function(){
    $('#ajax').on('click', AJAX);
    $('#get').on('click', GET);
    $('#post').on('click', POST);

    function AJAX(){
        $.ajax({
            url: "header.html",
            type: "POST",
            success: function(retorno){
                $('.ajax').html(retorno);
            }
        });
    }

    function GET(){
        $.get(
            "lista.html",
            function (result){
                $('#lista-times').append(result);
            }
        );
    }

    function POST(){
        $.post(
            "select.html",
            function (retorno){
                $('.post').html(retorno);
            }
        );
    }
});
//=================================================


$(document).ready(function(){
    $('#ajax').on('click', AJAX_UF);
    $('.estado').on('change', AJAX_CIDADE);
    $('#get').on('click', GET_ESTADO);
    $('#post').on('click', POST_CIDADE); // $('#post').on('click', POST_CIDADE());
    // Se eu colocar o parenteses após a chamada da função ele carrega assim que a pagina for acessada.

    function AJAX_UF(){
        $.ajax({
            url: "consulta.php",
            type: "GET",
            data: {acao: 'carregar_uf'},
            beforeSend: function(){
                $('.aguarde').html("<img src='../img/aguarde.gif'>");
            },
            success: function(retorno){
                $('.estado').html(retorno);
                $('.aguarde').html("");
            }
        });
    }

    function AJAX_CIDADE(){
        var id = $('.estado').val();

        $.ajax({
            url: "consulta.php",
            type: "GET",
            data: {acao: 'carregar_cidade', id_uf: id},
            beforeSend: function(){
                $('.aguarde').html("<img src='../img/aguarde.gif'>");
            },
            success: function(retorno){
                $('.cidade').html(retorno);
                $('.aguarde').html("");
            }
        });
    }

    function GET_ESTADO(){
        $('.get').html("<img src='../img/aguarde.gif'>");

        $.get(
            "consulta.php",
            {acao:'carregar_lista'},
            function (retorno){
                $('.get').html(retorno);
            }
        );
    }

    function POST_CIDADE(){
        $('.post').html("<img src='../img/aguarde.gif'>");

        $.post(
            "consulta_json.php",
            {acao: 'carregar_json'},
            function(retorno){
                var json = $.parseJSON(retorno);  // transforma em objeto javaScript
                var html = "";

                for(i=0; i<json.length; i++){
                    var cidade = json[i].descricao;
                    html = html + "<p>" + cidade + "</p>";
                }

                $('.post').html(html);
            }
        );
    }

});

//=================================================================

Prevent a link from opening the URL:

$("a").click(function(event){
  event.preventDefault();
});

HTML:

<form action="http://localhost:8888/bevbros/index.php/test" method="post" accept-charset="utf-8" id="cpa-form" class="forms">        
      <input type="text" name="zip" value="Zip code" id="Zip" class="required valid">      
      <input type="submit" name="Next" value="Submit" class="forms" id="1">
  </form>
jQuery:

$("#cpa-form").submit(function(e){
    e.preventDefault();
  });

//===================================================================
Event.preventDefault()

// Resumo
// Cancela o evento se for cancelável, sem parar a propagação do mesmo.

// Sintaxe
// event.preventDefault();
// Exemplo
// Alternar é a ação padrão de clicar em uma caixa de seleção. Este exemplo demonstra como impedir que isso aconteça:

<!DOCTYPE html>
<html>
<head>
<title>preventDefault example</title>

<script>
function stopDefAction(evt) {
   evt.preventDefault();
}

document.getElementById('my-checkbox').addEventListener(
   'click', stopDefAction, false
);
</script>
</head>

<body>

<p>Please click on the checkbox control.</p>

<form>
   <input type="checkbox" id="my-checkbox" />
   <label for="my-checkbox">Checkbox</label>
</form>

</body>
</html>
// Copy to Clipboard
// Você pode ver o preventDefault em ação aqui.

// O exemplo a seguir demonstra como um input com texto inválido pode ser parado ao chegar ao campo de entrada com o preventDefault().

<!DOCTYPE html>
<html>
<head>
<title>preventDefault example</title>

<script>

function Init () {
   var myTextbox = document.getElementById('my-textbox');
   myTextbox.addEventListener( 'keypress', checkName, false );
}

function checkName(evt) {
   var charCode = evt.charCode;
   if (charCode != 0) {
       if (charCode < 97 || charCode > 122) {
           evt.preventDefault();
           alert(
               "Please use lowercase letters only."
               + "\n" + "charCode: " + charCode + "\n"
           );
       }
   }
}

</script>
</head>
<body onload="Init ()">
   <p>Please enter your name using lowercase letters only.</p>
   <form>
       <input type="text" id="my-textbox" />
   </form>
</body>
</html>

===========================================================

/*
Enter your name: <input type="text" id="fname">

<script>
document.getElementById("fname").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>
*/
==========================================================

// Adicionando um evento
input.addEventListener("keyup", function(){
    removerSpans();
 });
//addEventListener("keyup", myFunction);

==========================================================

<input type="text" id="demo" onkeydown="keydownFunction()" onkeyup="keyupFunction()">

<script>
function keydownFunction() {
  document.getElementById("demo").style.backgroundColor = "red";
}

function keyupFunction() {
  document.getElementById("demo").style.backgroundColor = "green";
}
</script>

==========================================================



















