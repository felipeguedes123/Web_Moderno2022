const a = {
    name: "Teste"
}

console.log(a)

const b = a

console.log(b)

b.name = "Opa"

console.log(a)

let c = 3
let d = c

d++

console.log(d)
console.log(c)