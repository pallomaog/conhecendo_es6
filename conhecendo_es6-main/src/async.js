// Programação Síncrona (de forma linear):
// As tarefas são executadas em ordem, uma após a outra.
// Se uma tarefa demorar muito para ser concluída, todo o programa ficará esperando por ela.

function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

// Linear: única thread (tarefa)
console.log('início');
console.log(funcaoMuitoPesada()); // retorna 1000000000
console.log('fim'); // aguarda a execução da funcaoMuitoPesada para aí sim retornar 'fim'


// Programação Assíncrona (de forma paralela):
// Múltiplas tarefas podem ser executadas simultaneamente, aproveitando ao máximo os recursos do sistema 
// ... e melhorando o desempenho em cenários onde várias operações podem ser realizadas em paralelo.

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch(erro) {
        reject('Deu erro na iteração dos números')
    }
})  // resolve em caso de sucesso e reject em caso de erro

// Passando parametros para uma promise:

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

// Em paralelo: duas threads (tarefas)
console.log('início');
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));  // Nova thread (tarefa)
console.log('fim');

// Transformar assíncrona em síncrona (fazer com que a função espere a execução da promise):

async function execucaoPrincipal() {
    console.log('início')

    promiseComParametros('manoela@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })

    // Primeria forma de se usar o await:
    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

    // Segunda forma (nesta forma é obrigatório usar try e catch):
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(erro) {
        console.log(erro)
    }

    console.log('fim');
}

execucaoPrincipal();
