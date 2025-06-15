
const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}

//console.log(curso);

// console.log(typeof(curso));

console.log(Object.keys(curso));

console.log(Object.values(curso));

console.log(Object.entries(curso));

Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
});

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// curso.nome = 'Criação de APIs Rest com Django Rest Framework';

// console.log(curso);

// TODO - Objeto acrescentado e o mesmo não pode ser modificado.
//                        obj    atributo        propriedades
// Object.defineProperty(curso, 'publicacao', {
//     enumerable: true, // torna a propriedade escondida na impressão
//     writable: false, // não pode ser sobrescrito ou não 
//     value: '07/12/2019'
// });

// curso.publicacao = '01/01/2020';

// console.log(curso);

// console.log(curso.publicacao);


// const outro = {}

// Object.defineProperty(outro, '', {

// });

// TODO torna os objetos com writable como falso, não permite mudar
// Object.freeze(curso);  // torna os objetos com writable com falso, não permite mudar

// curso.nome = 'Dança da Garrafa';

// console.log(curso);

const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek University'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony', discos: [{nome: 'Ricardo Brandão', empresa: 'Google'}]}
]

//console.log(usuarios);

console.table(usuarios);

console.table(curso); // mostra o objeto em forma de tabela
