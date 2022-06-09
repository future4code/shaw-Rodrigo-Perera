enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
  }
  
  type Pessoa = {
    nome: string;
    salario: number;
    setor: SETOR;
    presencial: boolean;
  };
  
  const listaFuncionarios: Pessoa[] = [
    { nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
    { nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETOR.MARKETING, presencial: true },
  ];
  
  const verificaFuncionario = (array: Pessoa[]): object[] => {
    const filtraFuncionarios: Pessoa[] = array.filter((funcionario) => {
      if (funcionario.setor === SETOR.MARKETING && funcionario.presencial === true) {
        return [funcionario.nome, funcionario.salario, funcionario.setor, funcionario.presencial];
      }
    });
    return filtraFuncionarios;
  };
  
  console.log(verificaFuncionario(listaFuncionarios));