// a)
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Já com a extensão instalada, é só usar o comando "tsc:" que realiza a transpilação do código e depois usariamos o "node:" para que execute o arquivo JS gerado
// c) Sim, teríamos que colocar ao invés do index no "node" dentro do comando "start", criariamos uma pasta build e daríamos o caminho após o "node" com ./build/arquivo.ts
// d) Caso esteja dentro da mesma pasta é só separar por espaço e o nome do arquivo após o caminho até ele. Exemplo: ./build/Exercicio1.ts Exercicio2.ts Exercicio3.ts