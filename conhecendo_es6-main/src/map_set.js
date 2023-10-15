// // // //  //
// Map e Set //
// // // //  //

// Map

let meuMap = new Map();
meuMap.set('nome', 'manoela'); // set = atribui
meuMap.set('stack', 'html, css, js');

console.log(meuMap);

const nome = meuMap.get('nome'); // get = retorna

console.log(nome);

console.log(meuMap.size); // size = tamanho; neste caso é 1

console.log(meuMap.has('sobrenome'));

// meuMap.clear();

// console.log(meuMap.size); // retorna 0

// Iteração:

// Chaves: nome e stack
for (let chave of meuMap.keys()) {
    console.log(chave);
}

// Valores: manoela e html, css, js
for (let valor of meuMap.values()) {
    console.log(valor);
}

// Entradas:
// ['nome' => 'manoela']
// ['stack' => 'html, css, js']
// + Desestruturação:
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// Remover item do map:

meuMap.delete('stack');

console.log(meuMap);

// Set

const cpfs = new  Set();

cpfs.add('92811369023');
cpfs.add('01957537043');
cpfs.add('59654996049');

console.log(cpfs);

console.log(cpfs.keys());  // mesmo retorno que: console.log(cpfs);
console.log(cpfs.values());  // mesmo retorno que: console.log(cpfs);

cpfs.forEach((valor) => {
    console.log(valor);
})

// Listagem de itens únicos com set:

const arrayComItensDuplicados = ['Manoela', 'Marcelo', 'Aline', 'Manoela', 'Aline', 'Maristela'];

// Primeiro passo: converter o array para um set

const arrayComoSet = new Set([...arrayComItensDuplicados]);

console.log(arrayComoSet);

// Segundo passo: transformar o set em um array novamente

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arraySemItensDuplicados);

// Nota: array usa [] e set usa {}