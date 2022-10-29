function teste1(num) {
    if(num > 7)
    console.log(num)
    console.log("Final")
}

// teste1(6)
// teste1(8)

// nao usar ponto e virgula na definição do bloco IF , nao usar nas estruturas de controle
function teste2 (num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)