function criarProduto(nome, preco) {
    return  {nome,
            preco,
            desconto: 0.1
    }

}

console.log(criarProduto("Notebook", 2199.49))
console.log(criarProduto("Mouse", 10.90))
console.log(criarProduto("Monitor", 1199.49))
console.log(criarProduto("Gabinete", 300.01))
console.log(criarProduto("Placa de Video", 430.19))