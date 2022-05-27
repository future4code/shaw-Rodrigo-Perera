const dataAniversario = () => {
    const nome: string = "Rodrigo";
    const data: string = "21/10/1993";
    const data1 = data.split("/")
    const frase: string = `Olá me chamo ${nome}, nasci no dia ${data1[0]} do mês de ${data1[1]} do ano de ${data1[2]}`;
    console.log(frase);
  };
  dataAniversario()