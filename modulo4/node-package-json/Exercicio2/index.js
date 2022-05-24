// 2 -

let operacao = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

switch(operacao){
	case "soma":
		console.log("a soma é:", num1 + num2)
		break;
	case "sub":
		console.log("a subtração é:", num1 - num2)
		break;
    case "div":
        console.log("a divisão é:", num1 / num2)
        break;
    case "mult":
        console.log("a multiplicação é:", num1 * num2)
        break;
    default: console.log('deu errado')
        break;
}