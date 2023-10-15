// // // // // // // //
// Métodos de arrays //
// // // // // // // //

const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// Usando o ES6, fica assim:

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
}) // Isso é uma iteração, cada elemento é visitado e impresso, porque o forEach só itera, ele não retorna nada.

const alunos = ['Marcelo', 'Manoela', 'Aline'];

const alunos2 = alunos.map(function(alunoAtual) {
    // alunoAtual = {
    //     nome: alunoAtual,
    //     curso: 'Front End'
    // }
    // return alunoAtual;
    return {
        nome: alunoAtual,
        curso: 'Front End'
    };
}) // Diferente do forEach, o map itera, faz modificações e ainda retorna este array modificado.

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];

const dobroDosNumeros = numeros.map(function(numeroAtual) {
    // numeroAtual = numeroAtual * 2;
    return numeroAtual * 2;
})

console.log(dobroDosNumeros);

// Retorna o item

const aline = alunos2.find(function(item) {
    return item.nome == 'Aline'; // true ou false
})

console.log(aline);

// Retorna o índice do item

const indiceDaAline = alunos2.findIndex(function(item) {
    return item.nome == 'Aline'; // true ou false
})

console.log(indiceDaAline);

// every: todos

alunos2.push({
    nome: 'Duda',
    curso: 'Back End'
})

const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'Front End';
})

console.log(todosAlunosSaoDeFrontEnd);

// some: pelo menos 1

const existeAlgumAlunoDeBackEnd = alunos2.some(function(item) {
    return item.curso === 'Back End'; // && item.curso === 'Front End'; retorna false
})

console.log(existeAlgumAlunoDeBackEnd);

// Podemos construir utilizando uma função anônima, que é feita desta forma:

const alunosDeBackEnd = alunos2.filter(function(item) {
    return item.curso === 'Back End';
})

console.log(alunosDeBackEnd);

// Ou então podemos construir utilizando uma função não anônima, desta forma:

function filtraAlunosDeBackEnd(aluno) {
    return aluno.curso === 'Back End';
}

const alunosDeBackEnd2 = alunos2.filter(filtraAlunosDeBackEnd);

console.log(alunosDeBackEnd2);

// Usando arrow function para construir este mesmo código anterior:

// const filtraAlunosDeBackEnd2 = aluno => aluno.curso === 'Back End';

// console.log(filtraAlunosDeBackEnd2());

// O método reduce recebe 2 argumentos

const numeros2 = [10, 22, 30, 10];

const soma = numeros2.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

// Fazendo o mesmo código, mas agora usando o tradicional FOR:

let somaComFor = 0;

for (let i = 0; i < numeros2.length; i++) {
    somaComFor += numeros2[i];
}

console.log(somaComFor);

// Usando reduce em strings

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `; // O uso do Template String foi para poder adicionar um espaço entre as strings.
    return acumulador;
}, '')

console.log(nomesDosAlunos);