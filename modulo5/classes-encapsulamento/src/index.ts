// Exercício 1

// a) Constructor serve para podermos realizar ações na instância criada pela Classe que o possui

// b) o console.log("Chamando o construtor da classe UserAccount") foi impresso 1 vez no terminal

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    setTransction(Transaction: Transaction) {
        this.transactions.push(Transaction)
    }

    getCpf() {
        return this.cpf
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getBalance() {
        return this.balance
    }

    getTransactions() {
        return this.transactions
    }
  
  }

  const novoUsuario = new UserAccount('854245657812', 'Rodrigo', 28)
  const novoUsuario2 = new UserAccount('55524258411', 'Daniel', 25)

// c) Para ter acesso as propriedades privadas, nós usamos métodos públicos que serve para controlar as mesmas. Conseguimos fazer isso através dos GETTERS e SETTERS.

// Exercício 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string){
        this.description = description;
        this.value = value;
        this.date = date
    }

    getDescription() {
        return this.description
    }

    getValue() {
        return this.value
    }

    getDate() {
        return this.date
    }
}

const addTransacao = new Transaction('teste transacao', 15000, "20/06/2022")

novoUsuario.setTransction(addTransacao)
novoUsuario2.setTransction(addTransacao)

// console.log(novoUsuario)

// Exercício 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    getAccount() {
        return this.accounts
    }

    getNames() {
        return this.accounts.map((user) => user.getName())
    }

    getUserCount() {
        return `O banco tem ${this.accounts.length} usuários`
    }
  
  }

const arrayUsuario = [novoUsuario, novoUsuario2]

const bank = new Bank(arrayUsuario)

console.log(bank.getUserCount())