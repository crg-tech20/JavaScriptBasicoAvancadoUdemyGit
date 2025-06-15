class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir_dados(){  // Métodos de instância, você instancia um objeto para fazer uso do método
        console.log(`${this.marca} ${this.modelo}`);
    }

    static retornar_marca(){  // Métodos estáticos, você não precisa de instanciar um objeto.
        return 'Honda';
    }

}
/* Métodos de instância, você instancia um objeto para fazer uso do método
   Métodos estáticos, você não precisa de instanciar um objeto.
*/

//const fit = new Carro('Fit');

//fit.imprimir_dados();

//console.log(fit.marca);

console.log(Carro.retornar_marca());

//Object.defineProperty()

console.log((Math.random()).toFixed(2));  // Método estático da classe Math

console.log((Math.PI).toFixed(3));  // Método estático da classe Math
