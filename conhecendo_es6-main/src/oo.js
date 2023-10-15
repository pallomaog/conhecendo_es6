function Pokemon(nomeDoPokemon, tipoDoPokemon) { // funções construtoras sempre começam com letra maiúscula
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
}

const pikachu = new Pokemon('Pikachu', 'elétrico'); // Pikachu é uma instância de Pokemon

// Com o ES6, tivemos a introdução das classes, então agora podemos criar uma classe e não mais uma função construtora

class Pokemon2 {
    // nome = '';
    // tipo = '';

    #hp = 100; // Encapsulamento no ES, não o 6, mas em sua versão um pouco mais recente. --> com o uso da # o recurso se torna privado, e com isso ele só é acessível dentro da classe.

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) { // Isto é um método
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() { // Isto é um método
        this.#hp -= 10;
    }

    exibeHp() { // Isto é um método
        console.log(this.#hp);
    }
}

// Herança no ES6

class Pikachu extends Pokemon2 {
    constructor() {
        super('Pikachu', 'elétrico') // super de superior
    }

    // Polimorfismo no ES6
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachu2 = new Pokemon2('Pikachu', 'elétrico');

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000 // hp sendo público, é possível ser alterado. Agora, o hp sendo privado, esta linha vai apenas criar um novo atributo, porém agora público, sem alterar o hp de 100 (pois este é um atributo privado).

console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

// pikachu2.atacar('choque do trovão')
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'elétrico';

console.log(pikachu2);
console.log(pikachuDoAsh);

// Quando fizemos esta extensão (esta herança), as instancias da classe filha também são consideradas instancias da classe mãe:
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon2);