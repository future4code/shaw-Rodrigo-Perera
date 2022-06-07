**Exercício 1**

a) O comando retiraria a coluna "salary" da table criada

b) Alteraria o nome da coluna de "gender" para "sex"

c) Alteraria o número máximo da string para 255

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

**Exercício 2**

a) UPDATE Actor
    SET name  = "Moacyr Franco", birth_date = "1936-10-05"
WHERE id = "003";

b) UPDATE Actor
SET name  = "JULIANA PAES"
WHERE id = "005";

c) UPDATE Actor
SET 
name = "Fernanda Montenegro",
birth_date = "1929-10-05",
salary = 500000,
gender = "female"
WHERE id = "005";

d) Testei com um id que ainda não existe na tabela e o SQL não reclamou. Acredito que seja possível atualizar mesmo que o ID não exista. Porém nenhuma linha e nenhuma coluna são afetadas.

**Exercício 3**

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

**Exercício 4**

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

**Exercício 5**

a) O comando conta todos os generos de atores e atrizes que tem na tabela e o separa pelo seu genero.

b) SELECT id, name FROM Actor
ORDER BY name DESC;

c) SELECT * FROM Actor
ORDER BY salary;

d) SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

**Exercício 6**

a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) Já saiu do cartaz: 
UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id = "001";

Ainda está em cartaz: 

UPDATE Movie
SET playing_limit_date = "2022-07-30"
WHERE id = "002";

d) Deletar: 
DELETE FROM Movie WHERE id = "003";

Atualizar sinopse: 
UPDATE Movie
SET sinopse = "Testando nova sinopse em filme deletado"
WHERE id = "003";

Resposta: Error Code: 1054. Unknown column 'sinopse' in 'field list'.

A linha onde deveria ter o id 3 foi deletada, portanto não consegue ler nenhum comando.