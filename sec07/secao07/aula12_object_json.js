/*
 JSON - JavaScript Object Notation
*/

console.log(`============ JavaScript Object Notation ============`);
const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

console.log(curso); // Objeto JavaScript
console.log(curso.preco());
console.log(typeof(curso));

console.log(`============ Convertendo o objeto JavaScript para JSON ============`);
// TODO FIXME Convertendo o objeto JavaScript para JSON
const json = JSON.stringify(curso);
console.log(json); // JSON
console.log(`Este é um Json, que tem o formato de string, aspas duplas => ${typeof(json)}`);
/**
{"nome":"Programação em JavaScript","horas":27}
string
 */

console.log(`============ Convertendo de JSON para Objeto JavaScript ============`);
// TODO Convertendo de JSON para Objeto JavaScript
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));
/**
{nome: "Programação em JavaScript", horas: 27}
object
 */

console.log(`============ Formatos errados e Corretos ============`);
//const json_errado = "{'nome': 'Programação em JavaScript', 'preco': 27.99}";

const json_corrigido = '{"nome": "Programação em JavaScript", "preco": 27.99}';

console.log(json_corrigido);
console.log(`Este é um Json, que tem o formato de string, aspas duplas => ${typeof(json_corrigido)}`);

const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));

// ============ Convertendo o objeto JavaScript para JSON ============
// {"nome":"Programação em JavaScript","horas":27}
// Este é um Json, que tem o formato de string, aspas duplas => string
// ============ Convertendo de JSON para Objeto JavaScript ============
// { nome: 'Programação em JavaScript', horas: 27 }
// object
// ============ Formatos errados e Corretos ============
// {"nome": "Programação em JavaScript", "preco": 27.99}
// Este é um Json, que tem o formato de string, aspas duplas => string
// { nome: 'Programação em JavaScript', preco: 27.99 }
// object