// armazenando uuma função em uma variavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


// armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(200, 10))

//retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(20, 5))