-- -- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- -- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- -- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

-- /*
-- comandos para mysql server
-- */

create database projeto_individual;
show databases;
use projeto_individual;
 create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(80),
senha varchar(45));

create table jogo (
idJogo int primary key auto_increment,
modo varchar(45),
	constraint chkModo check(modo in ('normal', 'dificil')));
    
insert into jogo values
(default, 'normal'),
(default, 'dificil');
    
create table tentativa (
idTentativa int,
fkUsuario int,
fkJogo int,
primary key pkCompTentativa (idTentativa, fkUsuario, fkJogo),
tempo int,
foreign key fkTentUsu (fkUsuario) references usuario(idUsuario),
foreign key fkTentJogo (fkJogo) references jogo(idJogo));