create table timefut (
  id serial primary key,
  nome varchar(50) not null,
  estado varchar(2) not null,
  sitetime varchar(50) not null
);


insert into timefut (nome, estado, sitetime) values ('Corinthians', 'SP', 'https://www.corinthians.com.br/');
insert into timefut (nome, estado, sitetime) values ('Palmeiras', 'SP', 'https://www.palmeiras.com.br/');
