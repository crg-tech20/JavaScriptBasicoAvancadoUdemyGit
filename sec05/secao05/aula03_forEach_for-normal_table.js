/**
 * 
 * 
 * 
 */
var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
];

//console.log(cursos);
//console.log(cursos.length);

// TODO - forEach, para cada
// definir uma função
function imprimir(curso, indice, array){ // passa o dado o indice e o array completo
    console.log(indice + ' - ' + curso);
    console.log(array);
}

// O forEach, para cada
// O forEach, passa para a função, o indice, valor e o array
cursos.forEach(imprimir); 

// TODO - utilização de uma função anônima (lambda/callback) e template string
//cursos.forEach(function(curso, indice, array){
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`); // <== template string
});

for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}

// TODO - table() Monta uma tabela, console.table(array)
console.table(cursos); // => gera uma tabela com os iteráveis, array/json/objects

var marcas = [{marca: 'Ford', modelo: 'Focus'},
              {marca: 'BMW', modelo: 'BMW Z4'},
              {marca: 'Fiat', modelo: 'Palio'},
              {marca: 'Audi', modelo: 'A3', ano: 2024}];
console.table(marcas); // => gera uma tabela com os iteráveis, array/json/objects

//////////////foreach e Arrow function //////////////
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
numbers.forEach(myFunctionTeste)

function myFunctionTeste(item, index, arr) {
  console.log(arr[index] = item * 10);
  console.log(arr);
}


// TODO - In ES6/2015 you can loop through an object like this (using the arrow function)
console.log('\n///// Using the arrow function /////')
var myObj = {
    first: "John",
    last: "Doe"
  };
  
  //
  //	Visit non-inherited enumerable keys
  //
  Object.keys(myObj).forEach(function(key) {
  
    console.log(key, myObj[key]);
  
  });

Object.keys(myObj).forEach(key => {
    console.log(key);        // the name of the current key.
    console.log(myObj[key]); // the value of the current key.
  });

Object.entries(myObj).forEach(([key, val]) => {
    console.log(key); // the name of the current key.
    console.log(val); // the value of the current key.
  });

Object.entries(myObj).forEach(([key, val]) => console.log(key, val));


console.log('\n/////// JSON <--> OBJ ////////')
console.log(JSON.stringify({x: 5, y: 6})) // objeto para json

var string = '{"data": [{"ID":1,"name":"Amateur astronomy \r"},{"ID":"2","name":"Amateur microscopy \r"},{"ID":"173","name":"Amateur radio \r"},{"ID":"299","name":"Amateur astronomy \r"},{"ID":"349","name":"Amateur theater \r"}]}' ;
var json1 = '{ "name": "Alex", "age": 23, "city": "Paris"}';  

var json = JSON.stringify(string); // String para json
console.log(json);

var obj = JSON.parse(json);  // json para objeto
console.log(obj);
var obj1 = JSON.parse(json1);
console.log(obj1);

/**
 * 
 * jQuery // PHP // json
 * 
 * 
 * 
 */
//jQuery json
//var myArray = jQuery.parseJSON(json);

{/* <script>
  function showValues() {
    var str = $( "form" ).serialize();
    $( "#results" ).text( str );
  }
single=Single2&multiple=Multiple3&check=check2&radio=radio1
</script> */}



////////////////////////////////////////////////////////////

// json encode
// <?php
// $age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

  
// echo json_encode($age);
// ?>

// Javascript object to JSON string
// var person={"first_name":"Tony","last_name":"Hawk","age":31};
// var personJSONString=JSON.stringify(person); 

/////////////////////////////////////////////////////////////

// json_encode()
// json_decode()


// <?php
// $age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

// echo json_encode($age);
// ?>
// Resp: {"Peter":35,"Ben":37,"Joe":43}

// <?php
// $cars = array("Volvo", "BMW", "Toyota");

// echo json_encode($cars);
// ?>
// Resp: ["Volvo","BMW","Toyota"]


// <?php
// $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
// $obj = json_decode($jsonobj);

// echo $obj->Peter;
// echo $obj->Ben;
// echo $obj->Joe;
// ?>

// <?php
// $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

// $arr = json_decode($jsonobj, true);

// echo $arr["Peter"];
// echo $arr["Ben"];
// echo $arr["Joe"];
// ?>

// <?php
// $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

// $obj = json_decode($jsonobj);

// foreach($obj as $key => $value) {
//   echo $key . " => " . $value . "<br>";
// }
// ?>

// <?php
// $jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

// $arr = json_decode($jsonobj, true);

// foreach($arr as $key => $value) {
//   echo $key . " => " . $value . "<br>";
// }
// ?>

// <?php
// $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

// var_dump(json_decode($json));
// var_dump(json_decode($json, true));

// ?>
// Resp:
// object(stdClass)#1 (5) {
//     ["a"] => int(1)
//     ["b"] => int(2)
//     ["c"] => int(3)
//     ["d"] => int(4)
//     ["e"] => int(5)
// }

// array(5) {
//     ["a"] => int(1)
//     ["b"] => int(2)
//     ["c"] => int(3)
//     ["d"] => int(4)
//     ["e"] => int(5)
// }















