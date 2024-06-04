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



