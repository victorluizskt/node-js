/*
    ALGUNS COMANDOS DE SQL

mysql -h localhost -u root -p  -> Acessa o banco de dados via terminal

SHOW DATABASES -> Mostra todos os bancos de dados do sistema

USE seuBancoDeDados -> Seleciona o banco de dados para alterações, modificações atribuições.

DESCRIBE nomeDoSeuBanco; -> Descvreve todos os dados daquele banco especifico.

INSERT INTO nomeDaTabela(parametro1, parametro2, [....params]) VALUES(
    paramentro1, parametro2, [....params]     -> Insere um determinado atributo/valor ao seu banco de dados.
); 

SELECT * FROM seuBancoDeDados -> Mostra tudo do banco de dados

SELECT * FROM usuarios WHERE campoQueVcProcura  >= 19 -> Seleciona apenas o campo que você procura com alguma
    determinada condição que você pode passar

DELETE FROM usuarios WHERE nome = "Pedro Gomes";  -> Deleta todos usuários dos quais tem o nome Pedro Gomes;

UPDATE usuarios SET idade = 45  WHERE idade = 8; -> Atualiza todas as idades do usuario que tem idade = 8;

SELECT * FROM usuarios; -> Seleciona todo a tabela que você está usando.
*/