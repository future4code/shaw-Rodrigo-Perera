// 1 - 
//  a) É acessado a partir do comando process.argv[2] atribuido a uma variável

//  b)
let userName = process.argv[2]
let age = Number(process.argv[3])
console.log(`Olá ${userName}! Você tem ${age} anos`)

// c)
let ageInSeven = age + 7
console.log(`Olá ${userName}! Você tem ${age} anos. Em sete anos você terá ${ageInSeven} anos`)