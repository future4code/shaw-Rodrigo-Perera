**Exercício 1**

a) Concordo que seja melhor pela maior segurança e combinação de caractéres.

**Exercício 2**

a) Ele cria um usuário com uma função assíncrona, onde o id, email e password é uma string. Insere o usuário com o comando 'insert' e dentro da tabela useTableName com o comando 'into'. A conexão ele estabelece através do knex e guardando na variável connection.

b) 
    CREATE TABLE User (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
);

**Exercício 3**

a) Faz com que seja recebido o valor do JWT como uma string. Serve para se certificar com que ela venha no formato certo.

b) 
