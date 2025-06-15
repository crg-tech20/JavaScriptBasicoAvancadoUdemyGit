class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    // Getters e Setters
    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._nome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    // Métodos
    falar(msg){
        console.log(`${this.nome} esta falando ${msg}`);
    }
    comer(){
        console.log(`${this.nome} esta comendo...`);
    }
    beber(){
        console.log(`${this.nome} ${this.sobrenome} esta bebendo`);
    }
}


class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    // Getters e Setters
    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    // Métodos
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);        
    }
}
// Em javascript todos os atributos são públicos
// Dentro das classes as funções são chamados de métodos e não usan function


