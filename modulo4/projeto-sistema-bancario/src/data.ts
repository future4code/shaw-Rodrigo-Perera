export type User = {
    name: string,
    cpf: number,
    birthday: string,
    transitions: Transitions[]
}

export type Transitions = {
    value: number,
    descprition: string,
    paymentDate: string
}

export let usersArray: User[] = [
    {
        name: "Rodrigo",
        cpf: 33333333333,
        birthday: "10/21/1993",
        transitions: [{
            value: 5000,
            descprition: "Blobbers",
            paymentDate: "05/04/2022"
        }]
    },
    {
        name: "Matheus",
        cpf: 11111111111,
        birthday: "12/20/1991",
        transitions: [{
            value: 500,
            descprition: "Bengers",
            paymentDate: "04/04/2022"
        }]
    },
    {
        name: "Henrique",
        cpf: 22222222222,
        birthday: "02/05/1994",
        transitions: [{
            value: 1000000,
            descprition: "Money Money",
            paymentDate: "05/05/2022"
        }]
    },
]