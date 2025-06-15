/**
 * 
 */

console.log('====== 1º Criando objeto através de uma factory function, uso de Arrow functions =====')
// FIXME - Criando objeto através de uma factory function, uso de Arrow functions
const pessoa1 = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando...`)
    }
}

const p1 = pessoa1('Felicity', 'Jones');
console.log(p1);
console.log(typeof(p1));
p1.andar();

console.log('========= 2º Criando objeto através de uma função construtora ===========')

// FIXME - Criando objeto através de uma função construtora
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = function(){
        console.log(`${this.nome} ${this.sobrenome} está andando...`);
    }
}

const p2 = new Pessoa2('Angelina', 'Jolie');
console.log(p2);
//console.log(typeof(p2));
//p2.andar();

console.log('========= 3º Criando objeto através de uma classe ===========')

// FIXME - Criando objeto através de uma classe
class Pessoa3{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    andar(){
        console.log(`${this.nome} ${this.sobrenome} está andando...`);
    }
}

const p3 = new Pessoa3('Xuxa', 'Meneguel');
console.log(p3);
//console.log(typeof(p3));
p3.andar();

console.log('====================')
p1.andar();
p2.andar();
p3.andar();
console.log('====================')
console.log(p1);
console.log(p2);
console.log(p3);

