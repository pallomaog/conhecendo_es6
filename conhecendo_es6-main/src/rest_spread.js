// // // // // // // // //  //
// Operadores Rest e Spread //
// // // // // // // // //  //

// Dicionário

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;

    // console.log(arguments) // arguments não é um array, porém é iterável, ou seja, conseguimos fazer um for nele.
    // return a + b;
}

console.log(somar(10, 20));

// Rest (uma função só pode ter 1 argumento rest apenas (uso dos ...), e quando usado ele precisa ser o último argumento da função):

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 35));

// Spread (usado para fazer concatenações, console.log, preenchimento de objetos), exemplos:

// Console.log:

const numeros = [1, 2, 3, 4];
console.log(...numeros);

// Concatenação:

const timesDeSp = ['Santos', 'Bragantino'];
const timesDoRio = ['Fluminense', 'Bota Fogo'];

// Sem o spread:
// const timesDeFutebol = timesDeSp.concat(timesDoRio);

// console.log(timesDeFutebol);

// Com o spread:
const timesDeFutebol = [...timesDeSp, ...timesDoRio];

console.log(timesDeFutebol);

// Preenchimento de um objeto:

const carroDaAline = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaManoela = {
    ...carroDaAline,
    motor: 1.8
}

console.log(carroDaManoela);

// // // // // //  //
// Desestruturação //
// // // // // //  //

// Estrutura original:

// const motorDoCarroDaAline = carroDaAline.motor;
// const motorDoCarroDaManoela = carroDaManoela.motor;

// Usando o recurso de desestruturação:

const {motor: motorDoCarroDaAline} = carroDaAline;
const {motor: motorDoCarroDaManoela} = carroDaManoela;

console.log(motorDoCarroDaAline);
console.log(motorDoCarroDaManoela);

// Desestruturação de um array usando rest (aqui, rest de restante mesmo):

const [item1, item2, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(outrosTimes);