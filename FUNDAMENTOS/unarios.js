let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //( essa forma pré-fixada de escrever ela tem precedência do que a do modela acima)
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)