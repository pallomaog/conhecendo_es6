// Arrow Function de forma enxuta:

const minhaFuncao = () => "Hello World"; // {
    // console.log("Hello World")
    // return "Hello World";
// }

// minhaFuncao()
console.log(minhaFuncao());

// Porém, precisa ser adaptada quando retorna um objeto

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this)
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);

// Aí fica o aviso: sempre que formos trabalhar com POO, onde temos que acessar o this, devemos optar pela forma convencional de escrever as funções (function padrão).
// Mas para escrever coisas mais sucintas, como um retorno ou criar um função que trate qualquer tipo de valor, podemos optar pelas arrow functions.