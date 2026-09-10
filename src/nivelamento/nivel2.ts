// Criando um novo type com dois campos
type Produto = {
    nome: string;
    preco: number;
};

// Criando variáveis utilizando o type Produto
let produto1: Produto = {
    nome: "Notebook",
    preco: 2500
};

let produto2: Produto = {
    nome: "Mouse",
    preco: 80
};

// Criando uma função utilizando o type Produto 

function verificarProduto(produto: Produto) {
// Condicional ternária

    const resultado = produto.preco >= 1000
        ? "Produto caro"
        : "Produto barato";

    console.log(`${produto.nome}: ${resultado}`);
}

// Chamando a função e executando
verificarProduto(produto1);
verificarProduto(produto2);
