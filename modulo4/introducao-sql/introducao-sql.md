**Exercício 1**

a) Tem o VARCHAR(n) que serve para atribuir uma string com o "n" números máximos de caractéres, tem o PRIMARY KEY que funciona como uma chave com indentificador único. Tem o DATE que é usado para representar uma data e por fim o  NOT NULL que é usado para fazer com que aquele campo seja obrigatoriamente preenchido (não pode ser null)

b) O SHOW DATABASES mostra todas as databases que tenho no MySQL e o SHOW TABLES mostra todas as tables ativas no meu programa

c) Mostra os detalhes da minha tabela. O nome de cada coluna, o tipo (se é VARCHAR, FLOAT, DATE), se pode ser NULL ou NOT NULL e se tem PRIMARY KEY

**Exercício 2**

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) Error Code 1062. Entrada '002' duplicada como Chave Primária. O erro acontece porque funciona como PRIMARY KEY, sendo que não poderia ter duas iguais.

c) Error code 1136. Contagem da coluna não se compara com a contagem de linhas. Acontece pois como todas as opções são NOT NULL, deveria ter o mesmo número de colunas assim para o de linhas.
    Corrigido:

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );

d) Error Code 1364. Campo 'name' não tem um valor padrão. O que acontece é que o código não passao valor no campo 'name', sendo assim não possui o necessãrio para adicionar na tabela
    Corrigido:

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "004",
        "Antonio Fagundes",
        400000,
        "1949-04-18", 
        "male"
    );

e) Error Code 1292. Valor de data incorreto para coluna birth_date na linha 1. Acontece pois como não está entre aspas o programa reconhece como um número, sendo assim uma forma incorreta de passar o valor.
    Corrigido:

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );

f) Ator: 
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "007", 
        "Gaten Matarazzo",
        5000000,
        "2002-09-08", 
        "male"
    );

    Atriz:
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "006", 
        "Sadie Sink",
        5000000,
        "2002-04-16", 
        "female"
    );


**Exercício 3**

a) SELECT * from Actor WHERE gender = "female";

b) SELECT salary from Actor WHERE name = "Tony Ramos";

c) Ele mostra todas as colunas e nas linhas são preenchidas com NULL, pois não são validas porém existe.

d) SELECT id, name, salary from Actor WHERE salary <= 500000 ;

e) Error Code 1054. Coluna "nome" não conhecida no campo de lista. O comando não funciona pois usa "nome" ao invés de name e também não estava com ";" no final dele.
    O certo seria: SELECT id, name from Actor WHERE id = "002";


**Exercício 4**

a) SELECIONE todos da lista Actor ONDE (name começa com "A%" OU name começa com "J%") E o salary seja maior que 300000

b) SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";

d) SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%g%" OR "%A%" OR "%a%") AND salary BETWEEN 350000 and 900000;



**Exercício 5**

a) CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

b) INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

c) INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

d) INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

e) INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "2000-09-15",
    10
);

**Exercício 6**


a) SELECT id, title, rating FROM Movie WHERE id = "002";

b) SELECT * FROM Movie WHERE name = "O Auto da Compadecida";

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;


**Exercício 7**

a) SELECT * FROM Movie
WHERE title LIKE "%vida%";

b) SELECT * FROM Movie
WHERE title LIKE "%Chicó%" OR
      synopsis LIKE "%Chicó%";

c) SELECT * FROM Movie
WHERE release_date < "2022-06-06";

d) SELECT * FROM Movie
WHERE release_date < CURDATE() AND 
      (title LIKE "%E%" OR
      synopsis LIKE "%Helena%";